import { Container, Grid2, Typography } from "@mui/material"
import Table from "../../components/organisms/table/Table.tsx"
import EmployeListFormFilter from "@/components/organisms/employeListFormFilter/EmployeListFormFilter.tsx"
import { MainStyles } from "@/styles/MainStyles.tsx"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store.ts"
import { useEffect, useState } from "react"

const EmployeList = () => {

    const { classes: styles } = MainStyles();
    const { employes } = useSelector((state: RootState) => state.employes);
    const [employesList, setEmployesList] = useState([]);

    useEffect(() => {
        setEmployesList(employes);
        console.log({ employes, employesList })
    }, [employes])

    return (
        <Container>
            <Grid2>
                <Typography className={styles.titleSection}>Empleados</Typography>

                <Grid2>
                    <EmployeListFormFilter />
                </Grid2>

                <Grid2>
                    <Table employesList={employesList} />
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default EmployeList