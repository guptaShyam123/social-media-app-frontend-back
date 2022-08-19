import axios from 'axios'
export const loginuser = (email , password) => async (dispatch)=>{
    try{
     
        dispatch({
            type:"loginRequest"
        })

       const {data}  = await axios.post("/api/v1/login",{
        email,password
       },
       {
        headers:{

        }
       }
       
       )
       dispatch({
        type:"loginSucess",
        payload:data.user
       })
  JSON.parse(localStorage.setItem("user",JSON.stringify(data.user)))
    } catch(error){
          
      console.log(error.messege)
    }
}

// register user

export const Registeruser = ( name , email , password) => async (dispatch)=>{
    try{
     
        dispatch({
            type:"registerRequest"
        })

       const {data}  = await axios.post("/api/v1/register",{
       name , email,password
       },
       {
        headers:{

        }
       }
       
       )
       dispatch({
        type:"registerSucess",
        payload:data.user
       })

    } catch(error){
          
      console.log(error.messege)
    }
}
  