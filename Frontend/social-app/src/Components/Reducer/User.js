import { createReducer } from "@reduxjs/toolkit";

const intialState = {}


export const UserReducer = createReducer(intialState,{
     
    loginRequest:(state) => {
        state.loading = true;
    },
    loginSucess:(state , action) => {

       state.loading = false;
       state.user = action.payload;
    },
    loginFailure:(state , action) => {
         
            state.loading = false;
            state.error = action.payload
    },
    registerRequest:(state ) => {
        state.loading = true;
    },
      registerSucess:(state , action)=>{
          state.loading = false;
          state.user = action.payload
      },
      registerFailure:(state, action)=>{
        state.loading = false;
        state.error = action.payload
      }
})