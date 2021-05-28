import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeMode: "Mode automatique",
};

export const lightingSlice = createSlice({
    name: "Lighting",
    initialState: initialState,
    reducers: {
        changeMode: (state, action) => {
            state.activeMode = action.payload;
        }
    }
});

// actions 
export const { changeMode } = lightingSlice.actions;

// selectors

export const lightingSelectors = {
    activeMode: (state) => state.lighting.activeMode,
}

// reducer
export default lightingSlice.reducer;
