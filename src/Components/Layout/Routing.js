import React from 'react'
import Home from '../Home/Home'
import Filter from '../Listing/Filter'
import Product from '../Product/Product'
import PlaceOrder from '../Orders/placeOrder'
import ViewOrder from '../Orders/viewOrder'
import MenuItems from '../Menus/MenuItems'
import { Route,Routes } from 'react-router-dom'





function Routing() {

  return (
   <>


 <Routes>

 <Route path="/" element={<Home/>}/>
  
   <Route path="/Filter/" element={<Filter/>}/>
   <Route path="/details/" element={<Product/>}/>
   <Route path="/placeOrder/:orderId" element={<PlaceOrder/>}/>
   <Route path="/viewBooking" element={<ViewOrder/>}/>
   <Route path="/menus/:restId" element={<MenuItems/>}/>



   </Routes>
  


   </>
  )
}

export default Routing