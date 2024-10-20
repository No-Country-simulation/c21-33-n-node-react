import { makeStyles } from "tss-react/mui";


export const StylesButtoms = makeStyles()((theme) => ({

    primaryButton: {
        backgroundColor: theme.palette.custom.main,
        width: '8rem',
        height: '3rem',
        borderRadius: '15px',
        fontSize: '1rem',
        color: theme.palette.background.paper,
        textTransform: 'none',
        fontWeight: 'bold'
    }

}));