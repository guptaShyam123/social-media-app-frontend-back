import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'


const Stylediv = styled.div`
  display: flex;
  gap:30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: black;
  height:10vh;
  border-top: 2px solid red;
  border-bottom: 2px solid red;;

`
const Para = styled.p`
color:white;
font-size:20px;
font-family:Montserrat;
font-weight:bolder;
`
const Buton = styled.button`
  background-color:white;
  height:5vh;
  width:5vw;
  outline:none;
  border-radius:3px;
  font-size:15px;
  color:black;
  text-align:center;
  cursor:pointer;
`

const Header = () => {

  const navigate = useNavigate()
     const handle = ()=>{
         localStorage.clear()
        
       
        setTimeout(()=>{
          navigate("/Login")
          window.location.reload()
        },2000)
     }
    
  return (
    <>
         <Stylediv>
         <Link style={{textDecoration:'none'}} to="/" ><Para  >HOME</Para></Link>
         <Link  style={{textDecoration:'none'}} to ="/about"> <Para>ABOUT</Para></Link>
         <Link  style={{textDecoration:'none'}} to ="/contact"> <Para>CONTACT</Para></Link>
         <Buton onClick={handle}>LOGOUT</Buton>
         </Stylediv>   
    </>
  )
}

export default Header