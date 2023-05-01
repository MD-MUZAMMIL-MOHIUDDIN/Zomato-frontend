import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import './Search.css'

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [show,setShow]=useState(false)

  const filteredPersons = details.length>0? details.filter(
    movie => {
      return (
        movie
        .restaurant_name
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      );
    }
  ):null;

  const handleChange = e => {
    const a=e.target.value
    if(a!=='')
    {
        setShow(true)
    }
 if(a==''){
        setShow(false)
    }
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll >
    {  filteredPersons? <SearchList filteredPersons={filteredPersons} show={show} setShow={setShow}  />:null}
      </Scroll>
    );
  }

  return (
    
    <section className="position-relative" style={{width:'300px'}}>
     
      <div className="d-flex">
  
      <span className="fa-solid fa-magnifying-glass m-3"></span>
        <input 
          className="search-box"
          type = "search" 
          placeholder="Search for restaurants"
          onChange = {handleChange}
        />


      </div>
      {show? searchList():null}
    </section>
  );
}

export default Search;