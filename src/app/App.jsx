import React,{useState} from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from '../components/home'
import Header from '../components/header'
import Advertise from '../components/advertise';
import AddProperty from '../components/addproperty';
import Listings from '../components/listings';
import Rent from '../components/rent';
import Login from '../components/login';
import Signup from '../components/signup';

function App() {

  const [listings,setListings]= useState([
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
        <Route exact path="rent" element={<Rent/>}/>
        <Route exact path="login" element={<Login/>}/>
        <Route exact path="signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
