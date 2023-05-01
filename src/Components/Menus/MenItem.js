import React from 'react'
import VEG from '../../Assests/veg-logo.png'
import NONVEG from '../../Assests/non-veg.jpeg'
import { useState } from 'react'
function MenuItem({ item, order, setOrder }) {
  const [TotalItems, setTotalItems] = useState([])
  const [Q, setQ] = useState(0)
  const veg_img = item.menu_type == "non-vegetarian" ? NONVEG : VEG


  const addOrder = (id) => {
   

    let add_details = item


   
    let i = order.indexOf(order.find(item => item.menu_id == id))
    if (i > -1) {
      order.splice(i, 1)

    }
    setQ(Q + 1)
    add_details.quantity = Q + 1
   

    setOrder([...order, add_details])

  }

  const removeOrder = (id) => {
   

    let add_details = item
   
    let i = order.indexOf(order.find(item => item.menu_id == id))
    if (i > -1) {
      order.splice(i, 1)

    }
    setQ(Q - 1)
    add_details.quantity = Q - 1
    
    if (add_details.quantity === 0) {
      setOrder([...order])
    }
    else {
      setOrder([...order, add_details])
    }


    

  }

  const addBtn = ()=>{

    if(Q>0)
    {
   return <div className="">
    <button className='btn btn-danger' onClick={()=>removeOrder(item.menu_id)}>-</button>
    <input type="text" value={Q}   className='count-item text-success text-center ms-2' />
    <button className='btn btn-success' onClick={()=>addOrder(item.menu_id)}>+</button>
  </div>
  } 
  else{
    return  <div className=''>
    <button className='btn btn-success' onClick={()=>addOrder(item.menu_id)}>ADD</button>

    </div>
  }
 
  }
  return (
        <>
      <div className="row">
        <div className="col-7">
          <img src={veg_img} className="veg-img" alt="Veg" />
          <div className="item-name">{item.menu_name} </div>
          <div className="item-price">`{item.menu_price} </div>
          <div className="item-desc">
            {item.description} </div>
        </div>
        <div className="col-5 text-center">
          <img src={item.menu_image} className="menu-img" />
          {addBtn()}
      
  </div>
        </div>

        <hr />


      </>
      )
}

      export default MenuItem