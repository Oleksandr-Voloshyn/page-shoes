import { configureStore } from "@reduxjs/toolkit";
import womenShoesReducer from "./womenShoes"


export default configureStore({
    reducer: {
        womenShoes: womenShoesReducer
    }
})