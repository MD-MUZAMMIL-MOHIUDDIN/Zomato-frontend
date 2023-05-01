import React from 'react';
import { Link } from 'react-router-dom';

function Card({person}) {

  return(
    <div className=" my-2">
<div className="d-flex">
<Link to={`/details?restId=${person.restaurant_id}`} className='text-decoration-none text-dark'>
  <div className=''>
   
    <img className=" mx-2" style={{width:'100px',height:'75px',float:'left'}} src={person.restaurant_thumb} />
     
     </div>
     <div className='px-4 '>
     <h6 className='fw-bold'>{person.restaurant_name}</h6>
           <p className='fs-6'>{person.address}</p>
     </div>
    </Link>
 
</div>

    
    </div>
  );
}

export default Card;