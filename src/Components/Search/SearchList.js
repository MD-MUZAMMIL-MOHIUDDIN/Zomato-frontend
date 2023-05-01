import React from 'react';
import Card from './Card';

function SearchList({ filteredPersons,show,setShow}) {
  const filtered = filteredPersons.map(person =>  <Card key={person._id} person={person} />); 
  return (
    <div onClick={()=>setShow(!show)}>
      {filtered}
    </div>
  );
}

export default SearchList;