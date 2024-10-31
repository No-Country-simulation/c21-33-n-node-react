import { makeStyles } from "tss-react/mui";


export const HomeStyles = makeStyles()((theme) => ({

    routeButtons_container: {
        margin: '2rem auto 0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-around',

        }
    },

    routeButtons_box: {
        margin: '1rem 0',
        border: `2px solid ${theme.palette.custom.quaternary}`,
        backgroundColor: theme.palette.custom.secondary,
        height: '10rem',
        width: '17rem',
        borderRadius: '.5rem',
        display: 'flex',
        padding: '0 2rem',
        '&:hover': {
            backgroundColor: theme.palette.custom.tertiary,
        },
        [theme.breakpoints.up('md')]: {
            margin: '0',
        }
    },

    routeButtons_button: {
        color: theme.palette.background.paper,
        fontWeight: 'bold',
        width: '100%'
    }


}));