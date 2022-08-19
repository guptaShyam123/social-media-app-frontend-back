import { createReducer } from "@reduxjs/toolkit";

const intialState = {
    isAuthenticated: false,
}


export const UserReducer = createReducer(intialState,{
     
    loginRequest:(state) => {
        state.loading = true;
    },
    loginSucess:(state , action) => {

       state.loading = false;
       state.user = action.payload;
       state.isAuthenticated = true;
    },
    loginFailure:(state , action) => {
         
            state.loading = false;
            state.error = action.payload
            state.isAuthenticated = false;
    },
    registerRequest:(state ) => {
        state.loading = true;
    },
      registerSucess:(state , action)=>{
          state.loading = false;
          state.user = action.payload
          state.isAuthenticated= true;
      },
      registerFailure:(state, action)=>{
        state.loading = false;
        state.error = action.payload
        state.isAuthenticated= false;
      }
})