import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

const store=configureStore({
    reducer:{
        counter: countSlice,
    }
})

export default store;

