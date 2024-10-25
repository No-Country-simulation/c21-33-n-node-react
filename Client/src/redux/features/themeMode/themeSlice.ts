import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ThemeState {
    theme: string
};

const initialState: ThemeState = {
    theme: 'light'
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeThemeMode: (state, action: PayloadAction<string>) => {
            state.theme = action.payload
        }
    }
})

export const { changeThemeMode } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;