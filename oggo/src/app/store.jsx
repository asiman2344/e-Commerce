import { configureStore } from '@reduxjs/toolkit';
import cityReducer from '../features/data.jsx'

export const store = configureStore({
    reducer: {
        city: cityReducer,
    }
})

