import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./cvSlice";



const store=configureStore({
    reducer:{
        input: inputReducer,
      
    },
   
})

export default store;