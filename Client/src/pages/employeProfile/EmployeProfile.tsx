import DeleteButton from "@/components/atoms/buttoms/DeleteButton";
import PrimaryButtom from "@/components/atoms/buttoms/PrimaryButtom";
import InputText from "@/components/organisms/inputText/InputText";
import InputTextDisabled from "@/components/organisms/inputTextDisabled/InputTextDisabled";
import { EmployeProfileStyles } from "@/styles/componets/EmployeProfileStyles";
import { MainStyles } from "@/styles/MainStyles";
import { routesLinkTo } from "@/utils/routesPath/routesPath";
import { Container, Grid2, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const EmployeProfile = () => {

    const { classes: styles } = MainStyles();
    const { classes: stylesEmployeProfile } = EmployeProfileStyles();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(routesLinkTo.editEmployeInfo)
    };

    return (
        <Container>

            <Grid2
                size={{ xs: 12 }}
                className={stylesEmployeProfile.container_headerSection}
            >
                <PrimaryButtom
                    text="Modificar datos"
                    onClick={handleNavigate}
                />

                <DeleteButton
                    text="Eliminar datos"
                />
            </Grid2>

            <Typography className={styles.titleSection}>
                Perfil del empleado
            </Typography>

            <Grid2 container spacing={2} className={stylesEmployeProfile.container_MainSection}>

                <Grid2
                    size={{ xs: 12 }}
                    className={stylesEmployeProfile.employeNumber_box}
                >
                    <Typography
                        className={stylesEmployeProfile.employeNumber_box_text}
                    >
                        Nro de Legajo
                    </Typography>

                    <InputTextDisabled
                        label={''}
                        value={'02-02-2020'}
                        size={6}
                    />

                </Grid2>

                <InputTextDisabled
                    label={'Fecha de inicio'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Fecha de finalizacion'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Correo electronico'}
                    value={'02-02-2020'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Nombres'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Apellidos'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Direccion'}
                    value={'02-02-2020'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Piso'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Departamento'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'DNI'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Fecha de nacimiento'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Pasaporte'}
                    value={'02-02-2020'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Pais'}
                    value={'02-02-2020'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Localidad'}
                    value={'02-02-2020'}
                    size={12}
                />

                <InputTextDisabled
                    label={'Celular'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Telefono hogar'}
                    value={'02-02-2020'}
                    size={6}
                />

                <InputTextDisabled
                    label={'Codigo postal'}
                    value={'02-02-2020'}
                    size={6}
                />

            </Grid2>

            {/* <InputText
                label='Nombres'
                size={6}
            /> */}
        </Container>
    )
}

export default EmployeProfile