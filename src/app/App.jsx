import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from '../components/home'
import Header from '../components/header'
import Advertise from '../components/advertise';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="advertise" element={<Advertise />}/>
      </Routes>
    </>
  )
}

export default App
