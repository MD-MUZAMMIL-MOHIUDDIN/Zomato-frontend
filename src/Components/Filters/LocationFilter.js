import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { BASE_URL } from '../../services/helper';

function LocationFilter(props) {
    const [locality, setLocations] = useState([])

useEffect(() => {
    axios.get(`${BASE_URL}/getAllLocations`)
    .then((response)=>{
        setLocations(response.data.locations)
    
     
    })
}, [])
    const handleLocationChange=(e)=>{
        console.log(locality)
        
        const location_name=e.target.value;
        const a = locality.find(i=>i.state_id == e.target.value)
        console.log(a.state)
        
        let state_name = a.state
      
        localStorage.setItem('state',state_name)
    
        props.setMealData(
            {
                ...props.mealData,
                state_id:location_name})
      
   
    }
    
//getAllLocations
  return (
    <div className='my-2' >
       
 <p>Select Location</p>
<div className="Select-Location  "> 
                 { <select onChange={(e)=>{handleLocationChange(e)
                    }}>
                            <option disabled selected>--Select Location</option>
                      
                            { locality.length>0? locality.map((item,index)=>{
                                return <option value={item.state_id} name={item.state} key={index}>{item.state}</option>
                            }):null }
                            
                        </select> }  
          
                    </div>
                  
    </div>
  )
}

export default LocationFilter