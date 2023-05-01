import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect,useContext } from 'react';
import axios from 'axios';

import {BASE_URL, Payment_URL} from "../../services/helper"


function PlaceOrder() {
    const history = useNavigate()

    const placeUrl = `${BASE_URL}/order`
    let params = useParams()
    const [id,setId] = useState(Math.round(Math.random() * 1e6));
    const [hotel_name,setHotel] = useState()
    const [inputs,setInputs] = useState({})
    const [cost,setAmount] = useState()
    

    useEffect(() => {
     axios.get(`${BASE_URL}/getCart/${params.orderId}`)
     .then(response=>{
        
        setAmount(response.data.data.Amount)
setHotel(response.data.data.hotel_name)
     })
     
    }, [])
  

    const placeOrder = ({id, hotel_name,inputs,cost}) => {
       
        let obj = {id, hotel_name,inputs,cost}

        axios.post(placeUrl,obj)
        .then(response=>{
           
           
        })
        .catch(err=>{
           alert(err)
        })
       
        }
    

    const handleChange = e => { setInputs(prevState => (
        { 
            ...prevState, [e.target.name]: e.target.value 
           
        } 
        )
        
    );
   
    }
    return(
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>Your Order From Restaurants {hotel_name} </h3>
                </div>
                <div className="panel-body">
                <form action={`${Payment_URL}/paynow`} method="POST">
                    <div className="row">
                        <input type="hidden" name="cost" value={cost}/>
                        <input type="hidden" name="id" value={id}/>
                       
                        <input type="hidden" name="hotel_name" value={hotel_name}/>
                        <div className="form-group col-md-6">
                            <label>Name</label>
                            <input className="form-control" name='name'
                            value={inputs.name} onChange={handleChange} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input className="form-control" name='email'
                            value={inputs.email} onChange={handleChange} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Phone</label>
                            <input className="form-control" name='phone'
                            value={inputs.phone} onChange={handleChange} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Address</label>
                            <input className="form-control" name='address'
                            value={inputs.address} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Total Price is Rs.{cost}</h2>
                        </div>
                    </div>
                    <button className="btn btn-success" 
                    onClick={()=>placeOrder({id, hotel_name,inputs,cost})}
                    type='submit'>
                        Checkout
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder