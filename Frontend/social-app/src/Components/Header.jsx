import React from 'react'
import {Link} from 'react-router-dom'
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

const Header = () => {

    
    
  return (
    <>
         <Stylediv>
         <Link style={{textDecoration:'none'}} to="/" ><Para  >HOME</Para></Link>
         <Link  style={{textDecoration:'none'}} to ="/about"> <Para>ABOUT</Para></Link>
         <Link  style={{textDecoration:'none'}} to ="/contact"> <Para>CONTACT</Para></Link>
         </Stylediv>   
    </>
  )
}

export default Header