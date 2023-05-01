import React from 'react'
import DisplayOrder from './displayOrder'
import axios from 'axios'
import { useState,useEffect,useContext } from 'react'
import queryString from 'query-string'
import { BASE_URL } from '../../services/helper'

function ViewOrder() {
 
    const placeOrder = `${BASE_URL}/getOrders`

   
    const [orders,setOrders] = useState()

    useEffect(()=> {
      const qs = queryString.parse(window.location.search)
      /*status=TXN_SUCCESS
      &ORDERID=TEST_63ff90180e364d4a4078e237&
      date=2023-03-01%2023:19:12.0&
      bank=ICICI%20Bank
      */
    let {status,ORDERID,date,bank}=qs;
    let order_id =ORDERID.split("_")[1]
    let data={status:status,date:date,bank:bank}

    axios.patch(`${BASE_URL}/order/${order_id}`,
    data
    )
    .then((res)=>{
  
    })
    .catch(err=>{
alert(err)
    })

        axios.get(placeOrder).then((res) => {
           
            setOrders(res.data.data)})
       
    },[])

  return (
 <div>

<DisplayOrder orderData={orders}/>
 </div>
  )
}

export default ViewOrder