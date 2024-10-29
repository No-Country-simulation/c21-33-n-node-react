import { makeStyles } from "tss-react/mui";


export const EmployeProfileStyles = makeStyles()((theme) => ({

    container_headerSection: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '2rem 0 0 0'
    },

    container_MainSection: {
        border: `1rem solid ${theme.palette.custom.quaternary}`,
        borderRadius: '1rem',
        margin: '3rem 0 0 0',
        padding: '4rem 6rem',
    },

    employeNumber_box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    employeNumber_box_text: {
        margin: '0 1rem 0 0',
        color: theme.palette.custom.secondary,
        fontWeight: 'bold',
        fontSize: '1.2rem'
    }

}));