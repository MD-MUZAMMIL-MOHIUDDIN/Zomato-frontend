import React from 'react'
import { Link } from 'react-router-dom'

function FilterResults(props) {
    const cuisines= props.restData.cuisines.map(item=>{return item.cuisine_name}).join(" , ")

  return (
    <div className="shadow result-article p-3 mb-5 bg-body-tertiary rounded">

<div className="result-div">
            <img src={props.restData.restaurant_thumb} 
            alt={props.restData.restaurant_name}  className="result-img mb-4"/>
            <div className="result-details">
                <Link to={`/details?restId=${props.restData.restaurant_id}`}  className="text-decoration-none">
            <p className="item-title">{props.restData.restaurant_name} </p> 
            </Link>
           
            <h4><span className='item-title fs-5 lh-lg'>Ratings :</span> <span className='text-danger'>{props.restData.average_rating}</span> </h4>
           
            <p className="address-line"> {props.restData.address} </p>
        </div>
            <hr width="100%" />
            <div  className="result-label1">
                <table className='mb-2'>
                    <tr>
                        <td className="result-td-1">CUISINES:</td>
                        <td className="result-td"   >{cuisines}</td>
                    </tr>
                    <tr className='my-2'>
                        <td className="result-td-1">COST FOR TWO:</td>
                        <td className="result-td">₹{props.restData.cost}</td>
                    </tr>
                </table>
               
            </div>
            
        </div>
        </div>
  )
}

export default FilterResults