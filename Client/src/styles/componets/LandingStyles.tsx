import { makeStyles } from "tss-react/mui";


export const LandingStyles = makeStyles()((theme) => ({

    marginElements: {
        margin: '1rem 0'
    },
    mainTitle: {
        fontSize: '2rem',
        color: theme.palette.custom.secondary,
        fontWeight: 'bold',
        margin: '1rem 0'
    }

}));