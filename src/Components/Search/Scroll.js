
import React from 'react';

const Scroll = (props) => {
  return( 
    <div className='bg-white' style={{overflowY: 'scroll', height:'50vh',position:'absolute',width:'400px',zIndex:100}}>
      {props.children}
    </div>	
  );
}

export default Scroll;