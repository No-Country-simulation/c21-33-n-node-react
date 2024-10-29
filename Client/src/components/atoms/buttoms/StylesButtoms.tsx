import { makeStyles } from "tss-react/mui";


export const StylesButtoms = makeStyles()((theme) => ({

    primaryButton: {
        backgroundColor: theme.palette.custom.main,
        width: '12rem',
        height: '3rem',
        borderRadius: '15px',
        fontSize: '1rem',
        color: theme.palette.background.paper,
        textTransform: 'none',
        fontWeight: 'bold'
    },

    deleteButton: {
        backgroundColor: theme.palette.error.main,
        width: '12rem',
        height: '3rem',
        borderRadius: '15px',
        fontSize: '1rem',
        color: theme.palette.background.paper,
        textTransform: 'none',
        fontWeight: 'bold'
    }

}));