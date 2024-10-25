import { makeStyles } from "tss-react/mui";


export const MainStyles = makeStyles()((/* theme */) => ({

    container: {
        margin: '1rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },

    container_Section: {
        margin: '3rem 0 0 0'
    },

    center_Element: {
        margin: '0 auto', textAlign: 'center'
    },

    maxWidth: {
        maxWidth: '100%'
    },

}));