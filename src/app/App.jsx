import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from '../components/home'
import Header from '../components/header'



function App() {

  return (
    <Routes>
      <Route path="/" element={<Header />}/>
      <Route exact path="/" element={<Home />}/>
    </Routes>
  )
}

export default App
