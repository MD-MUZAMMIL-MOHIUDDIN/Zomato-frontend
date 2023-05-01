import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Home from './Components/Home/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Filter from './Components/Listing/Filter';
import Product from './Components/Product/Product';
import PlaceOrder from './Components/Orders/placeOrder';
import ViewOrder from './Components/Orders/viewOrder';
import MenuItems from './Components/Menus/MenuItems'
import { Fragment } from 'react';
import Layout from './Components/Layout/Layout';


function App() {
  
  return (
  

  
<Fragment>  

  <BrowserRouter>
  <Layout/>
  </BrowserRouter>
 

</Fragment>

    

   
  );
}

export default App;
