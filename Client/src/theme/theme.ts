import { createTheme } from "@mui/material";

const commonsProperties = {
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
};

export const themeLight = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff'
        },
        background: {
            paper: '#fff',
            default: '#fff'
        }
    },
    ...commonsProperties
});

export const themeDark = createTheme({
    palette: {
        primary: {
            main: '#5C5470',
            light: '#DBD8E3',
            dark: '#352F44',
            contrastText: '#fff'
        },
        background: {
            paper: '#2A2438',
            default: '#2A2438'
        }
    },
    ...commonsProperties
});