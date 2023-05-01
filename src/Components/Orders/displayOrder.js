import React from 'react'

function DisplayOrder(props) {
    
const renderTable=()=>{
    return props.orderData.map((item)=>{
       return       <tr key={item.id}>
       <td>{item.id}</td>
       <td>{item.hotel_name}</td> 
        
      <td>{item.inputs.name}</td>
       <td>{item.inputs.phone}</td>
       <td>{item.inputs.email}</td>
        
        
       <td>Rs. {item.cost}</td>
       <td>{item.date}</td>
       <td>{item.status}</td>
       <td>{item.bank}</td>
   </tr>
    })
}
   
  return (
   
   <div className="container">
    <center><h3>Orders</h3></center>
    <table className="table ">
    <thead>
    <tr className='bg-danger'>
                        <th>OrderId</th>
                        <th>RName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>
                    </tr>
    </thead>
    <tbody>
        {props.orderData? renderTable():null}
        </tbody>
        </table>
        </div>
  )
}



export default DisplayOrder