import { makeStyles } from "tss-react/mui";


export const MainStyles = makeStyles()((theme) => ({

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

    marginTop_Element: {
        marginTop: '1rem'
    },

    maxWidth: {
        maxWidth: '100%'
    },

    titleSection: {
        color: theme.palette.custom.secondary,
        fontSize: '2rem',
        fontWeight: 'bold'
    }

}));