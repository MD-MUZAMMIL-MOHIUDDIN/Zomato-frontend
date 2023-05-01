import React from 'react'

function SortFilter(props) {

    const  handleSortChange=(sortOrder)=>{
        
       props.setMealData({
          ...props.mealData,
            sort:sortOrder
        })
     
    }
        
    return (
        <div>

            <div className="sort">
                Sort
            </div>
            <div>
                <input  type="radio" name="sort" value="1"
                    onClick={() => { handleSortChange(1) }} />
                <label className="form-check-label ms-1" htmlFor="flexRadioDefault2">
                    Price low to high</label>
            </div>
            <div>
                <input type="radio" name="sort" 
                    onClick={() => { handleSortChange(-1) }} />
                <label className="form-check-label ms-1" htmlFor="flexRadioDefault2">
                    Price high to low</label>
            </div>
        </div>

  )
}

export default SortFilter