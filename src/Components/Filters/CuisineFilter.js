import React from 'react'
import axios from 'axios';
function CuisineFilter(props) {







const  handleCuisineChange = (e)=>{
   



let cuisine=e.target.value
    
  let cuisines = props.mealData.cuisine
  const index = cuisines.indexOf(cuisine)
  if(index<0 && e.target.checked )
  {
      cuisines.push(cuisine)
   
  }
  else{
      cuisines.splice(index,1)
     props.setMealData({
      ...props.mealData,
          cuisine:cuisines
      })

  }
  setTimeout(() => {
    props.FilterRestaurants()
}, 0);

}

  return (
    <>
    <div className="filter-criteria" >
            <p className="filter-section-headings" >Cuisine</p>


            <div onChange={handleCuisineChange}>
            <p> <input type="checkbox" name="cuisine 1" id="cuisine1" value="1"/>North Indian</p>
          <p>  <input type="checkbox" name="cuisine 2" id="cuisine2" value="2"/>South Indian</p>
            <p><input type="checkbox" name="cuisine 3" id="cuisine3" value="3"/>Chinese</p>
            <p><input type="checkbox" name="cuisine 4" id="cuisine4" value="4"/>Fast Food</p>
            <p><input type="checkbox" name="cuisine 5" id="cuisine5" value="5"/>Street Food</p>
        </div>
            </div>
          
</>
  )
}

export default CuisineFilter