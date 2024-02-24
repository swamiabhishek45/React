import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice'
const store = new configureStore({
    reducer: {
        auth: authReducer
        //TODO: add more slices here for posts
    }
})

export default store;