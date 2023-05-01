import React from 'react'
import '../../Styles/Product.css'
import queryString from 'query-string'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect,useState } from 'react'
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MenuItem from '../Menus/MenItem';
import MenuItems from '../Menus/MenuItems';
import Gallery from './Gallery';
import {BASE_URL} from "../../services/helper"


function Product(props) {
  const history =useNavigate()
  const [tabIndex, setTabIndex] = useState(0);
  const [details, setdetails] = useState([])
const [cuisines, setcuisines] = useState(null)
  useEffect(() => {
    const qs = queryString.parse(window.location.search)
    const { restId } = qs;
    localStorage.setItem("restId",restId)
   
    axios.get(`${BASE_URL}/getDetails/${restId}`)
   .then((response)=>{
    let result = response.data.data[0]
    
    setdetails(result)
    setcuisines(result.cuisines.map(item=>{return item.cuisine_name}).join(" , "))

   })
  }, [])


  const proceed = ()  => {
    sessionStorage.setItem('restName',details.restaurant_name)

}
  
const displayMenus=()=>{
  
  return <div className="modal fade" id="menu"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5"  >Menu Items</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <MenuItems/>
      </div>
     
    </div>
  </div>
</div>
}
  return (
    <>
<div className='product-div'>
{displayMenus()}
<Gallery gallery={details.image_gallery}/>
        <div className="col-12 mt-lg-5 mt-md-5 mt-3 ">
            <div className="restOverviewImgContainer mx-1 ">
                <img className='rest-img' src={details.restaurant_thumb} />
           
           <button className='btn position-absolute btn-outline-white resOverviewBtn' data-bs-toggle="modal" data-bs-target="#gallery">Click here for gallery</button>
            </div>
        </div>



        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='my-3 overview-contact mx-2 me-5'>
        
      <TabList>
      <Tab >Overview</Tab>
          <Tab>Contact</Tab>
          {/*  place order ------------------- */}
          <button type="button" className=" float-end place-order" 
          data-bs-toggle="modal" data-bs-target="#menu"
          onClick={proceed}>Place Online Order</button>
          
         
      </TabList>
      <TabPanel>
          
          <div  id="overview-content" >
        <h3 className='fs-1 fs-sm-4 my-4 fw-bold'>About this place</h3>
        <div className="item-details">
            <h4 className="item-header">Cuisine</h4>
         
            <span className="item-type-price">{cuisines}</span>
        </div>
        <div className="item-details">
            <h4 className="item-header">Average Cost</h4>
            <span className="item-type-price">₹{details.cost} for two people (approx.)</span>
        </div>
    </div>
        </TabPanel>
        <TabPanel>
          
          <div  id="contact-content" >
        <div className="item-details" id="contact-details">
        <span className="contact-title">Phone Number</span><br/>
        <span id="contact-no">{details.contact_number?details.contact_number:"No Contact details"}</span>
    </div>
    <div className="item-details">
        <h3 className="contact-title fw-bold">{details.restaurant_name}</h3>
        <p className="address">{details.address}</p>
        
    </div>
    </div>
        </TabPanel>
    </Tabs>

    </div>
   
  





    </>
  )
}

export default Product