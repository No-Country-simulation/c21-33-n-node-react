import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice.ts';
import themeReducer from './features/themeMode/themeSlice.ts';
import drawerReducer from './features/drawer/drawerSlice.ts';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        drawer: drawerReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;