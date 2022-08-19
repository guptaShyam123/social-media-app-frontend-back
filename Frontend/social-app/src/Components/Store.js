import { configureStore } from "@reduxjs/toolkit";
import {UserReducer} from './Reducer/User'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {likeReducer} from './Reducer/post'


  const store = configureStore ({
      reducer : {
         user:UserReducer,
         like:likeReducer,
      },
      middleware:[thunk , logger]
  })

  export default store


