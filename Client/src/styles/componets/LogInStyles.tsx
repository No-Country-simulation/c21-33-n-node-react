import { makeStyles } from "tss-react/mui";


export const LogInStyles = makeStyles()((theme) => ({

    containerStyles: {
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
    },
    mainContent: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1rem 0 0 0'
    },
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
        margin: '3rem 0 1rem 0',
        '& > button': {
            width: '100%',
            margin: '0 auto'
        }
    },
    formStyles: {
        /* display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' */
    },
    smallText: {
        fontSize: '.7rem'
    },
    loginForm_box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logInImg_Box: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center'
        }
    },
    logInImg: {
        border: `.5rem solid ${theme.palette.custom.tertiary}`,
        borderRadius: '1rem',
        padding: '0'
    }

}));