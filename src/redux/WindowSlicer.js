import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: "Lighting",
}

export const windowSlice = createSlice({
    name: "window",
    initialState: initialState,
    reducers: {
        changeTab: (state, action) => {
            state.activeTab = action.payload;
        }
    }
})

// actions
export const { changeTab } = windowSlice.actions;


// selectors
export const windowSelectors = {
    activeTab: (state) => state.window.activeTab, 
}

// reducer
export default windowSlice.reducer;
