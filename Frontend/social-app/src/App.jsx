import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css'



const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App