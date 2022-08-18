import { configureStore } from "@reduxjs/toolkit";
import {UserReducer} from './Reducer/User'
import logger from 'redux-logger'
import thunk from 'redux-thunk'



  const store = configureStore ({
      reducer : {
         user:UserReducer,
      },
      middleware:[thunk , logger]
  })

  export default store


