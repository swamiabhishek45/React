import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice'
const store = new configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store;