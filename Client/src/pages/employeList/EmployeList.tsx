import { Container, Grid2, Typography } from "@mui/material"
import Table from "../../components/organisms/table/Table.tsx"
import EmployeListFormFilter from "@/components/organisms/employeListFormFilter/EmployeListFormFilter.tsx"
import { MainStyles } from "@/styles/MainStyles.tsx"

const EmployeList = () => {

    const { classes: styles } = MainStyles();

    return (
        <Container>
            <Grid2>
                <Typography className={styles.titleSection}>Empleados</Typography>

                <Grid2>
                    <EmployeListFormFilter />
                </Grid2>

                <Grid2>
                    <Table />
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default EmployeList