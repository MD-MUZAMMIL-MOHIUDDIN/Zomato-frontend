import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import './Subtotal.css'

import MenuItem from './MenItem'
import {BASE_URL} from "../../services/helper"



function MenuItems() {
  
  
 const histoty =useNavigate()
const [menudata, setMenuData] = useState()
const [orderList,setOrderList ]=useState([])
const [Amount,setAmount] =useState([])


    useEffect(() => {

     const restId= localStorage.getItem("restId")

      axios.get(`${BASE_URL}/menuItems/${restId}`)
      .then(response=>{
        setMenuData(response.data.menudata)
       //console.log(response.data.menudata)

      })
    }, [])


    const renderMenu = ({menudata}) => {
      if(menudata){
     
          return menudata.map((item) => {
             
            return <MenuItem key={item.menu_id} item={item} order={orderList} setOrder={setOrderList}/>
          })
      }
  }

  const subtotal=(order)=>{
    return order.reduce(
          (accumulator, item, currentIndex, array) => {
             accumulator = accumulator + Number(item.menu_price) * Number(item.quantity);
             return (accumulator);
          }, 
       0)
  }

  const addToOrder = () => {

      let temp = {
       
         hotel_name:sessionStorage.getItem('restName'),
         items:[...orderList],
         Amount:subtotal(orderList)
     }
    
     axios.post(`${BASE_URL}/addToCart`,temp)
     .then(response=>{
      
       histoty(`/placeOrder/${response.data.data._id}`)
       
     })
     setAmount(temp)
   
    
   
    
}

  return (
<div> 
{renderMenu({menudata})}
{orderList.length>0?
 <div className="subtotal-div">
        <div className="subtotal-head">Subtotal</div>
        
        <div className="price">`{subtotal(orderList)}</div>
        
        <div className="paynow-div">  
            <button className="pay-now" onClick={()=>addToOrder()} data-bs-dismiss="modal">Pay Now</button>
        </div>
        </div>
        :null}
</div>

   
  )
}

export default MenuItems