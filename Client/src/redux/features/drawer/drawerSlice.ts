import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

interface DrawerState {
    value: boolean
};

const initialState: DrawerState = {
    value: false
};

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        openDrawer: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
    }
});

export const { openDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;