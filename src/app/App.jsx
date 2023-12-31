import React,{useState} from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from '../pages/home'
import Header from '../components/header'
import Advertise from '../components/advertise';
<<<<<<< HEAD
import AddProperty from '../pages/addproperty';
import Listings from '../pages/listings';

=======
import AddProperty from '../components/addproperty';
import Listings from '../components/listings';
import Rent from '../components/rent';
import Login from '../components/login';
import Signup from '../components/signup';
>>>>>>> cee91295d569807ce211522222e2f663d5cfa39d

function App() {

  const [listings, setListings]= useState([
    {
      name:'Duplex Apartment',
      price: '3,000,000'
    },
    {
      name:'Semi-detached Apartment',
      price: '3,000,000'
    },
    {
      name:'Bungalow Apartment',
      price: '2,000,000'
    },
    {
      name:'Luxurious Apartment',
      price: '10,000,000'
    }
  ]
  )




  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="advertise" element={<Advertise />}/>
        <Route exact path="add" element={<AddProperty />}/>
        <Route exact path="buy" element={<Listings products={listings}/>}/>
<<<<<<< HEAD
=======
        <Route exact path="rent" element={<Rent/>}/>
        <Route exact path="login" element={<Login/>}/>
        <Route exact path="signup" element={<Signup/>}/>
>>>>>>> cee91295d569807ce211522222e2f663d5cfa39d
      </Routes>
    </>
  )
}

export default App
