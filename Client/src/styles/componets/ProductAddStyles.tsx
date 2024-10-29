import { makeStyles } from "tss-react/mui";


export const ProductAddStyles = makeStyles()((theme) => ({

    container_MainSection: {
        border: `1rem solid ${theme.palette.custom.quaternary}`,
        borderRadius: '1rem',
        margin: '1rem 0 0 0',
        padding: '2rem',
        [theme.breakpoints.up('md')]: {
            margin: '3rem 0 0 0',
            padding: '4rem 6rem',
        }
    },

}));