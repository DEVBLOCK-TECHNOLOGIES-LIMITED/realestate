import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from '../components/home'
import Header from '../components/header'



function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
