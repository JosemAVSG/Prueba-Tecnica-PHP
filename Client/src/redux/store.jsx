import {configureStore} from '@reduxjs/toolkit'
import authSlice from './slices/authSlice';
import documentSlice from './slices/documentSlice'
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        document: documentSlice.reducer
    },
})

export default store