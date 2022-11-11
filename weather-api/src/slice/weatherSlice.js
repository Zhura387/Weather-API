import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const weatherSlice = createSlice({
    name: 'weath',
    initialState,
    reducers: {
        addWeather: (state, action) => {
            state.value = action.payload
        
        },
    }
})

export const { addWeather } = weatherSlice.actions;

export default weatherSlice.reducer