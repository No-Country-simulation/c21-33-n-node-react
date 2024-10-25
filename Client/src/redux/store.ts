import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/auth/auth.slice.redux.ts';
import counterReducer from './features/counter/counterSlice.ts';
import drawerReducer from './features/drawer/drawerSlice.ts';
import themeReducer from './features/themeMode/themeSlice.ts';


export const store = configureStore({
    reducer: {
        auth: authSlice,
        counter: counterReducer,
        drawer: drawerReducer,
        theme: themeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;