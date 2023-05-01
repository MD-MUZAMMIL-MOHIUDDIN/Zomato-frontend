import React from 'react'

function FilterOptions() {
  return (
    <div className="shadow filter-article p-4 py-5  mb-5 bg-body-tertiary rounded">
        <div className="filter">

        <h3 className="filter-headings">Filters</h3>
        <div className="filter-criteria">
            <p className="filter-section-headings ">Select Location</p>
            <p>
            <select name="city" id="" >
                <option value="" disabled selected>Select Location</option>
                <option value="1">Mumbai</option>
                <option value="2">Delhi</option>
                <option value="3">Banglore</option>
                <option value="4">Hyderabad</option>
                <option value="5">Kolkata</option>
            </select>
        </p>
        </div>
        <div className="filter-criteria">
            <p className="filter-section-headings" >Cuisine</p>
            <p> <input type="checkbox" name="cuisine 1" id="cuisine1" value="1"/>North Indian</p>
          <p>  <input type="checkbox" name="cuisine 2" id="cuisine2" value="2"/>South Indian</p>
            <p><input type="checkbox" name="cuisine 3" id="cuisine3" value="3"/>Chinese</p>
            <p><input type="checkbox" name="cuisine 4" id="cuisine4" value="4"/>Fast Food</p>
            <p><input type="checkbox" name="cuisine 5" id="cuisine5" value="5"/>Street Food</p>
        </div>
      
        <div className="filter-criteria">
            <p className="filter-section-headings">Cost For Two</p> 
            <p><input type="radio" value="costlessthan=500" name="cost" />Less than 500</p>
            <p><input type="radio" value="costmorethan=500&costlessthan=1000" name="cost" />500 to 1000</p>
            <p><input type="radio"  name="cost"  vlaue="costmorethan=1000&costlessthan=1500"/>1000 to 1500</p>
            <p><input type="radio" name="cost"  value="costmorethan=1500&costlessthan=2000"/>1500 to 2000</p>
            <p><input type="radio" name="cost" value="costmorethan=2000"/>2000+</p>
        </div>

        <div className="filter-criteria">
          <h3 className="filter-headings">Sort</h3>
            <p><input type="radio" name=" sortascending" value="1"/>Price Low to High</p>
            <p><input type="radio" name=" sortascending" value="2"/>Price High to Low</p>
            
        </div>


        </div>
    </div>
  )
}

export default FilterOptions