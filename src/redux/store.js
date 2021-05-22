import { configureStore } from '@reduxjs/toolkit';
import windowReducer from "./WindowSlicer";


export default configureStore({
    reducer: {
        window: windowReducer
    }
})
