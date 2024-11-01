import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routesLinkTo } from '@/utils/routesPath/routesPath';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'status', headerName: 'Estado', width: 100 },
    { field: 'firstName', headerName: 'Nombres', width: 130 },
    { field: 'lastName', headerName: 'Apellidos', width: 130 },
    { field: 'age', headerName: 'Edad', type: 'number', width: 90 },
    { field: 'position', headerName: 'Puesto', width: 160 },
    { field: 'startDate', headerName: 'Fecha de entrada', width: 160 },
    { field: 'email', headerName: 'Correo electronico', width: 160 },
    {
        field: 'action', headerName: 'Ver', width: 160, renderCell: (params) => {
            const navigate = useNavigate();
            const handleClick = () => {
                console.log(`${routesLinkTo.profileEmploye}/${params.row.id}`)
                navigate(`${routesLinkTo.profileEmploye}/${params.row.id}`)
            };

            return (
                <Button onClick={handleClick}>
                    Ver
                </Button>
            )
        }
    },
    /* {
        field: 'position',
        headerName: 'Puesto',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    }, */
];

/* const rows = [
    { id: 1, status: 'Activo', firstName: 'Jon', lastName: 'Snow', age: 35, position: 'Operador', startDate: '01-01-2020', email: 'johnsnow@gmail.com' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]; */

const paginationModel = { page: 0, pageSize: 5 };

interface EmployeTableData {
    id: string,
    status: string,
    firstName: string,
    lastName: string,
    age: string,
    position: string,
    startDate: string,
    email: string
}

interface TableProps {
    employesList: EmployeTableData[]
}

const Table = ({
    employesList
}) => {

    const [rows, setRows] = useState<EmployeTableData>();

    useEffect(() => {
        console.log(employesList)
        if (employesList?.length > 0) {

            const formatData = () => {
                const data: EmployeTableData[] = employesList.map(employe => ({
                    id: employe.legado,
                    status: employe.status,
                    firstName: employe.firstName,
                    lastName: employe.lastName,
                    age: 30,
                    position: 'opeador',
                    startDate: employe.startDate,
                    email: employe.email
                }));
                console.log({ data })
                setRows(data)
            };

            formatData();
        }
    }, [employesList]);

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 20]}
                //checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}

export default Table