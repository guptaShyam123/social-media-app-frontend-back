import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Register from './Components/Register'
import Login from './Components/Login'
import './App.css'



const user = JSON.parse(localStorage.getItem('user') )

const App = () => {
  return (
    <>
    <BrowserRouter>
   {  user  && <Header />}
    <Routes>
    <Route path="/" element={  <Home/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/Login" element={ <Login/>}/>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App