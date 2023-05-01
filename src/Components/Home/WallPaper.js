import React, { useCallback } from 'react'
import Header from '../Layout/Header'
import axios from "axios";
import '../../Styles/Home.css'
import  { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
import  Search  from '../Search/Search';
import {BASE_URL} from "../../services/helper"


function WallPaper() {

  const history=useNavigate()

  const locationurl=`${BASE_URL}/getAllLocations`
    const [location, setLocation] = useState([])
    const [RestDetails,setRestDetails] =useState([])
    const [RestaurantNames,setRestaurantNames]=useState([])
   
  const[cityId,setCityId]=useState(0)
   
    const onLocationSelect = (e)=>{
      
        const loc=e.target.value
       const loc1=location.find(item=>item.location_name==loc)
       localStorage.setItem('state_id',loc1.state_id)
       localStorage.setItem('state',loc1.state)
       
      
       getRestaurantNames()
       }
 

       useEffect(() => {
        setRestaurantNames(RestaurantNames)
    
      }, [RestaurantNames]);
     
    useEffect(() => {
        getLocations();
      }, []);
     
      const getLocations = async () => {
        const response = await axios.get(locationurl)
        .then((res)=>{
setLocation(res.data.locations)


        })
      
        
      };

const getRestaurantNames=async()=>{
  const state_id = localStorage.getItem('state_id');
  const response = await axios.
  get(`${BASE_URL}/restaurant/${state_id}`)
        .then(response=>{
         
          setRestDetails(response.data.data)
          const locations = response.data.data.map(item=>item.restaurant_name)
         
            setRestaurantNames(locations);
       
        })
 

      }
  return (
    <div>
 <div className="container-fluid back-wall-img  pt-5 ">
     
      
        <div className="row">
          <div className="col text-center my-5">
            <span className="logo fw-bold" >e!</span>
          </div>
        </div>
        <div className="row">
          <span className="text-center title-restaurant fw-bold ">Find the best restaurants, cafés, and bars</span>
        </div>
        <div className="row text-center ">
          <div >
           
            
           <input type='text' onChange={(e)=>{onLocationSelect(e)}} list="dlocations" placeholder="Please type a location" className="col-10 col-lg-2 px-4 my-sm-1 mx-sm-4  col-md-10 col-sm-10" />
            <div className="restaurant-search  text-start col-lg-4 my-4 py-2 my-sm-4 mx-1 col-md-10 col-10  col-sm-10  bg-light d-inline-block mx-4">
          
              <Search details={RestDetails}/>
            </div>
          </div>
        </div>
        
    </div>
      <datalist id="dlocations" style={{fontSize:'10px'}}  >
      <option disabled>--Select Location</option>
      
      {location? location.map((item)=>{
       
        return <option key={item._id } >{item.location_name}</option>} ):null  }
   </datalist>
</div>
  )
}

export default WallPaper