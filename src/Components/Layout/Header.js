import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import queryString from 'query-string'


function Header() {
  const location = useLocation()
  const history = useNavigate()
const [state, setstate] = useState()

const [Bg, setBg] =useState("bg-danger")



useEffect(() => {

if(location.pathname==="/")
{
  setstate("d-none")
  setBg("bg-transparent py-4 w-100 position-absolute")
}
else{
  setstate("d-block")
  setBg("bg-danger position-relative")
  
}

}, [location.pathname])


const logOut = () => {
  googleLogout();
  setProfile(null);
  };

  return (
    <div className=''>
     
     
    <nav className={`navbar py-1  ${Bg} `}>
  <div className="container-fluid ">
    <Link to='/' className="navbar-brand ms-5">
      <span className={`p-2 px-3 rounded-circle  bg-white fw-bold fs-1 text-danger  logo-div ${state}`}> e!</span></Link>
    <div className="d-flex">

    </div>
    <div className="d-flex">

   

   <>
    <button className='btn btn-outline-light border-0 btn btn-lg mx-2' >Login</button>
    <button className="btn btn-outline-light btn btn-lg mx-2 " >Create an account</button>
    
   </>
   
  

     
    </div>
  </div>
</nav>
    </div>

  )
}

export default Header