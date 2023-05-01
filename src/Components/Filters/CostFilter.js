import React from 'react'
import axios from 'axios';

function CostFilter(props) {
    const url='http://3.17.216.66:4000/filter'

  const  handleCostChange = (event) => {

      
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1];
       
           
            props.setMealData({
                ...props.mealData,
                lcost:lcost,
                hcost:hcost
            
            })
        }
      
  


  return (
    <>



    
<div className="filter-criteria">
            <p className="filter-section-headings">Cost For Two</p> 
            <div  onChange={handleCostChange}>
            
            <p><input type="radio" value="0-500" name="cost" />Less than 500</p>
            <p><input type="radio" value="501-1000" name="cost" />500 to 1000</p>
           <p><input type="radio" name="cost" value="1001-1500" />1000 to 1500</p>
            <p><input type="radio" name="cost"  value="1501-2000"/>1500 to 2000</p>
            <p><input type="radio" name="cost" value="2001-10000"/>2000+</p>
            </div>
           
        </div>
  
    </>
  )
}

export default CostFilter