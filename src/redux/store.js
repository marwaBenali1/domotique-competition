import { configureStore } from '@reduxjs/toolkit';

import windowReducer from "./WindowSlicer";
import lightingReducer from "./LightingSlicer";


export default configureStore({
    reducer: {
        window: windowReducer,
        lighting: lightingReducer,
    }
})
