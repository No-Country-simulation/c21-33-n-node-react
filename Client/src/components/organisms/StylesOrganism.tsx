import { makeStyles } from "tss-react/mui";

export const StylesOrganism = makeStyles()((theme) => ({
    regularText: {
        fontSize: '.9rem'
    },
    formInput: {
        margin: '1rem 0 0rem 0',
    },
    modalContainer: {
        //boder: `2px solid ${theme.palette.custom.secondary}`,
    },
    modalHeader: {
        backgroundColor: theme.palette.custom.main,
        padding: '1rem 2rem',
        borderTopRightRadius: '.5rem',
        borderTopLeftRadius: '.5rem'
    },
    modalTitle: {
        color: theme.palette.background.paper,
        fontSize: '1.3rem',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalBody: {
        padding: '1rem 2rem 1rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    modalFooter: {
        textAlign: 'center',
        margin: '0 0 1rem 0'
    }
}))