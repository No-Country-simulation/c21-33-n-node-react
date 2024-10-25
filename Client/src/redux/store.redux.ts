import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/auth.slice.redux';

export const store = configureStore({
    reducer:{
        auth: authSlice
    }
})

// Tipos derivados del store para usarlos en todo tu proyecto
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;