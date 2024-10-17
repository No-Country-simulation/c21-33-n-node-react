import { makeStyles } from "tss-react/mui";


export const LogInStyles = makeStyles()((theme) => ({

    mainTitle: {
        fontSize: '2rem',
        color: theme.palette.custom.secondary,
        fontWeight: 'bold',
    },
    contentSpace: {
        margin: '1rem 0 0 0'
    },
    regularText: {
        fontSize: '.9rem'
    },
    formInput: {
        margin: '3rem 0 0 0'
    },
    formStyles: {
        /* display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' */
    },
    smallText: {
        fontSize: '.7rem'
    },
    logInImg: {
        border: `.5rem solid ${theme.palette.custom.tertiary}`,
        borderRadius: '1rem',
        padding: '0'
    }

}));