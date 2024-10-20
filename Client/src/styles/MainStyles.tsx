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

    maxWidth: {
        maxWidth: '100%'
    }

}));