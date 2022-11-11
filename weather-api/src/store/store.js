import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from '../slice/weatherSlice'

export const store = configureStore({

    reducer: {
        weath: weatherSlice,
    }
})