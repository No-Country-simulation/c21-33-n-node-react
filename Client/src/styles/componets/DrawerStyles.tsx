import { makeStyles } from "tss-react/mui";


export const DrawerStyles = makeStyles()((theme) => ({

    container: {
        width: '100%',
        backgroundColor: theme.palette.custom.secondary,
        textAlign: 'center',
        margin: '.25rem 0 0 0',
        position: 'absolute',
        [theme.breakpoints.up('md')]: {
            width: '20rem',
            height: 'calc(100vh - 5.25rem)'
        }
    },
    menuOption: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 0 0 2rem',
        margin: '0 0 .25rem 0',
        backgroundColor: theme.palette.custom.quaternary,
        color: theme.palette.background.paper,
        height: '3.5rem',
        '& > p': {
            fontWeight: 'bold'
        }
    },

    mainIconSidebar: {
        width: '12.5rem',
        margin: '2rem 0'
    },

    iconsSidebar: {
        width: '3rem',
        height: '3rem',
        margin: '0 1rem 0 0'
    }

}));