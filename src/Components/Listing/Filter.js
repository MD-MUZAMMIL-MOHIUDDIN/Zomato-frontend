import React from 'react'
import { useEffect, useState } from 'react'
import queryString from 'query-string'
import FilterOptions from './FilterOptions'
import FilterResults from './FilterResults'
import '../../Styles/Filter.css'
//import { useParams } from 'react-router-dom'
import axios from 'axios'
import CuisineFilter from '../Filters/CuisineFilter'
import CostFilter from '../Filters/CostFilter'
import Pagination from 'react-mui-pagination';
import Fab from '@material-ui/core/Fab';
import SortFilter from '../Filters/SortFilter'
import LocationFilter from '../Filters/LocationFilter'
import NoResult from '../Filters/NoResult'
import {BASE_URL} from "../../services/helper"


function Filter() {
  //const params=useParams()
  const [TotalPages, setTotalPages] = useState(0)
  const [page, setMyPage] = useState(1); // this an example using hooks
  const setPage = (e, p) => {
    setRequestData({
      ...RequestData,
      page: p
    })
   
    setMyPage(p)
  }

  const qs = queryString.parse(window.location.search)
  const { mealtype, mealTypeId } = qs;
  const [RequestData, setRequestData] = useState(
    {
      mealtype_id: mealTypeId, cuisine: [], state_id: undefined,
      lcost: undefined, hcost: undefined, page: 1, sort: 1
    })

  const [ResultData, setResultData] = useState([])



  useEffect(() => {
    // let mealId = params.mealId
    getRestaurants()
  }, [RequestData.page, RequestData.sort, RequestData.state_id, RequestData.lcost, RequestData.hcost])

  const setDataPerFilter = (data) => {
    setResultData(data)
  }

  const getRestaurants = () => {

    let RequestObj = JSON.parse(JSON.stringify(RequestData));


    if (RequestObj.cuisine.length < 1) {
      RequestObj.cuisine = undefined
    }

    
    axios.post(`${BASE_URL}/filterRestaurants`, RequestObj)
      .then((response) => {
        setResultData(response.data.restaurants)
      
        setTotalPages(response.data.TotalPages)
      })
  }

  return (
    <div className='m-5 '>
      <div className="fs-1">
        <div className="title-text"> {mealtype} Places in {localStorage.getItem('state')}   </div>
      </div>
      <div className='my-3 d-flex flex-column flex-lg-row flex-md-row  '>
        {/**
       * <FilterOptions/>
       */}
        <div className=''>
          <center><h2 className='text-sm-start'>Filters</h2></center>
          <LocationFilter mealData={RequestData}
            setMealData={setRequestData}
          />
          <CuisineFilter mealData={RequestData}
            setMealData={setRequestData}
            FilterRestaurants={getRestaurants} />
          <CostFilter mealData={RequestData}
            setMealData={setRequestData} />
          <SortFilter mealData={RequestData}
            setMealData={setRequestData} />

        </div>

        <div className='d-flex flex-column' >
          {ResultData.length > 0 ? ResultData.map((item) => {
            return <FilterResults key={item._id} restData={item} />
          })
            : <NoResult/> }

          <div className='text-center'>
            {TotalPages >2 ? <Pagination

              linksColor='success'
              FirstLastComponent={Fab}
              prevProps={{ border: '2px solid blue' }}
              hidePrevNext
              activeProps={{ style: { fontWeight: 'bold' } }}
              page={page} setPage={setPage} total={TotalPages} perPage={2} />
              : null}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Filter