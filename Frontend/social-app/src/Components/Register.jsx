import React , {useState} from 'react'
import styled from 'styled-components'
import {FaUserAlt} from "react-icons/fa"
import {RiLockPasswordFill} from "react-icons/ri"
import {Registeruser} from './Action/User'
import { useDispatch } from 'react-redux'

const Maindiv = styled.div`

box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:74vh;
width:33vw;
margin-top:10vh;

@media (min-width:319px) and (max-width:374px){
    box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:50vh;
width:33vw;
margin-top:10vh;
}
@media(min-width:375px) and (max-width:420px){
    box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:50vh;
width:77vw;
margin-top:10vh;
}

`
const Log = styled.p`
     font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     color:red;
     font-size:20px;
     padding-top:5vh;
     @media (min-width:320px) and (max-width:375px){
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     color:red;
     font-size:20px;
     padding-top:5vh;

     }
     @media (min-width:376px) and (max-width:420px){
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     color:red;
     font-size:20px;
     padding-top:5vh;
     }
`
const Input = styled.input`
box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:6vh;
width:23vw;
outline: none;
margin-top:9vh;
text-align:center;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size:16px;
border-radius:20px;
border:none;

::placeholder ,
::-webkit-input-placeholder{
    color:black;
}
@media (min-width:319px) and (max-width:374px){
    box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:6vh;
width:23vw;
outline: none;
margin-top:5vh;
text-align:center;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size:16px;
border-radius:20px;
border:none;

::placeholder ,
::-webkit-input-placeholder{
    color:black;
}
}
@media (min-width:375px) and (max-width:420px){
    box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:6vh;
width:45vw;
outline: none;
margin-top:5vh;
text-align:center;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size:12px;
border-radius:20px;
border:none;

::placeholder ,
::-webkit-input-placeholder{
    color:black;
}
}

`
const Input1 = styled.input`
border-radius:20px;
border:none;
::placeholder ,
::-webkit-input-placeholder{
    color:black;
}
box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:6vh;
width:23vw;
outline:none;
margin-top:9vh;
text-align:center;
font-size:15px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
@media (min-width:319px) and (max-width:374px){
    border-radius:20px;
border:none;
::placeholder ,
::-webkit-input-placeholder{
    color:black;
}
box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:6vh;
width:23vw;
outline:none;
margin-top:5vh;
text-align:center;
font-size:15px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

}
@media (min-width:375px) and (max-width:420px){
    border-radius:20px;
border:none;
::placeholder ,
::-webkit-input-placeholder{
    color:black;
}
box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
height:6vh;
width:45vw;
outline:none;
margin-top:5vh;
text-align:center;
font-size:12px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`
const Inputonediv = styled.div`
display:flex;
margin-left:17%;

@media (min-width:319px) and (max-width:374px){
    display:flex;
margin-left:17%;
}
@media (min-width:375px) and (max-width:420px){
    display:flex;
margin-left:17%;


}
` 
const Icon = styled(FaUserAlt)`
   margin-top:11vh;
   margin-left:-6%;
   @media (min-width:319px) and (max-width:374px){
    margin-top:7vh;
   margin-left:-6%;
   }
   @media (min-width:375px) and (max-width:420px){
    margin-top:7vh;
   margin-left:-20px;
   height:13px;
   width:13px;
   }
`
const Inputdiv2 = styled.div`
display:flex;
margin-left:17%;
@media (min-width:319px) and (max-width:374px){

    display:flex;
margin-left:17%;
}
@media (min-width:375px) and (max-width:420px){
    display:flex;
margin-left:17%;
}
`
const Icon1 = styled(RiLockPasswordFill)`
margin-top:11vh;
   margin-left:-6%;
   @media (min-width:319px) and (max-width:374px){
    margin-top:7vh;
   margin-left:-6%;
   }
   @media (min-width:375px) and (max-width:420px){
    margin-top:7vh;
   margin-left:-20px;
   height:13px;
   width:13px;
   }
`
const Button = styled.button`
font-size:20px;
margin-top:10vh;
background-color:#E22845;
height:6vh;
width:23vw;
border-radius:20px;
color:#FFFFFF;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: 0;
margin-left:3%;
@media (min-width:319px) and (max-width:374px){
    margin-top:7vh;
background-color:#E22845;
height:6vh;
width:23vw;
border-radius:20px;
color:#FFFFFF;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: 0;
margin-left:3%;
}
@media (min-width:375px) and (max-width:420px){
    margin-top:7vh;
background-color:#E22845;
height:6vh;
width:45vw;
border-radius:20px;
color:#FFFFFF;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: 0;
margin-left:-5%;
}
`
const Register = () => {

    const [name , Setname] = useState()
    const [email , Setemail ] = useState()
    const [password , Setpassword ] = useState()
    
    const dispatch = useDispatch()

          
    const handle = (e)=>{
        e.preventDefault();

        console.log(email)
      dispatch(Registeruser(name , email ,password ))
    }
    
  return (
    <>
    <center>
    <Maindiv>
    <Log>You can register now</Log>
    <form onSubmit={handle} >
      
    <Inputonediv>
    
    <Input  type="name" id="name"  placeholder='Enter your Name' onChange={(e)=>Setname(e.target.value)} value={name} required/>
    <Icon />
    </Inputonediv>
    <Inputonediv>
    
    <Input  type="email" id="email"  placeholder='Enter your Email' onChange={(e)=>Setemail(e.target.value)} value={email} required/>
    <Icon />
    </Inputonediv>
    <Inputdiv2>
    <Input1 type="password" id="password"  placeholder="Enter your Password" onChange={(e)=>Setpassword(e.target.value)} value={password} required/>
    <Icon1 />
    </Inputdiv2>
    <Button type="submit">Register</Button>
    </form>
    </Maindiv>
    
    </center>
    </>
  )
}

export default Register