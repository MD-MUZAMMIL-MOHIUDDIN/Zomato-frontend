import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../services/helper"

function QuickSearches() {
const [widgets, setWidgets] = useState([])
  useEffect(() => {
    getWidgets();
    console.log(BASE_URL)
  }, []);
  

 const getWidgets = async () => {
    const response = await axios.get(`${BASE_URL}/getAllWidgets`);
    
    setWidgets(response.data.widgets);
  };
  return (
    <div>
<div className="container">
            <div className="row">
                <h1 className="fw-bolder ms-2 quick-title">Quick Searches</h1>
            </div>
            <div className="row  ms-2">
                <h3 className=' quick-subtitle '>Discover restaurants by type of meal</h3>
            </div>
        </div>
        
        <div className="container items-container overflow-hidden">
            <div className="row g-5 row-cols-1 row-cols-sm-1 row-cols-lg-3 row-cols-md-2 text-start">

{widgets.map((item,index)=>{



    return(
      <Link className="text-decoration-none text-dark" to={`/Filter/?mealTypeId=${item.mealtype_id}&mealtype=${item.mealtype}`} key={item.mealtype} >
        <div className="col" key={index}>
        <div className="item-details-info  ">
            <img alt='' src={item.meal_image} className="item-img float-start" />
            <div>
                <h3 className="item-widget-title text-dark">
                {item.mealtype} 
                    </h3>
                   
                <span>{item.content}</span>
            </div>
        </div>
      </div>
      </Link>  
    )

})}
            </div>
        </div>

  
</div>

  )
}

export default QuickSearches