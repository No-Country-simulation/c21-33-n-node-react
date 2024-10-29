import InputText from "@/components/organisms/inputText/InputText";
import { regExValidation } from "@/utils/validations/Validations";
import { Box, Button, Container, Grid2, Typography } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form";
import ImgEmploye from '../../assets/images/imag_employe.png'
import { LogInStyles } from "@/styles/componets/LogInStyles";
import { RegisterNewEmploye } from "@/utils/interfaces";
import { MainStyles } from "@/styles/MainStyles";
import { StylesButtoms } from "@/components/atoms/buttoms/StylesButtoms";

const NewEmploye = () => {

    const { control, handleSubmit, /* setValue */ } = useForm<RegisterNewEmploye>({
        defaultValues: {
            firstName: '',
            lastName: '',
            streetAddress: '',
            floor: '',
            apartment: '',
            dni: '',
            birthDate: '',
            passport: '',
            country: '',
            city: '',
            phone: '',
            phoneHouse: '',
            postalCode: '',
            legado: '',
            email: '',
            startDate: '',
        }
    });

    const { classes: styles } = MainStyles();
    const { classes: stylesLogIn } = LogInStyles();
    const { classes: stylesButtons } = StylesButtoms();

    const handleSubmitData: SubmitHandler<RegisterNewEmploye> = (data) => {
        console.log(data)
    };

    return (
        <Container>

            <Typography
                className={`
                ${styles.center_Element}
                ${styles.titleSection}
                `}>
                Formulario de ingreso de empleado
            </Typography>

            <Grid2 container className={styles.container_Section}>

                <Grid2 size={{ xs: 12, lg: 6 }}>
                    <form onSubmit={handleSubmit(handleSubmitData)}>

                        <Grid2 container spacing={2}>

                            <InputText
                                autocomplete='given-name'
                                inputName='firstName'
                                control={control}
                                htmlFor='firstName'
                                label='Nombres'
                                placeHolder='Ingresa nombres'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.name,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={6}
                            />

                            <InputText
                                autocomplete='family-name'
                                inputName='lastName'
                                control={control}
                                htmlFor='lastName'
                                label='Apellidos'
                                placeHolder='Ingresa apellidos'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.name,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={6}
                            />

                            <InputText
                                autocomplete='street-address'
                                inputName='streetAddress'
                                control={control}
                                htmlFor='street-address'
                                label='Direccion'
                                placeHolder='Ingresa direccion'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.general,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={12}
                            />

                            <InputText
                                autocomplete='on'
                                inputName='floor'
                                control={control}
                                htmlFor='floor'
                                label='Piso'
                                placeHolder='Ingresa piso'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.general,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={false}
                                size={6}
                            />

                            <InputText
                                autocomplete='on'
                                inputName='apartment'
                                control={control}
                                htmlFor='apartment'
                                label='Departamento o Casa'
                                placeHolder='Ingresa apartamento o casa'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.general,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={6}
                            />

                            <InputText
                                autocomplete='on'
                                inputName='dni'
                                control={control}
                                htmlFor='dni'
                                label='DNI'
                                placeHolder='Ingresa dni'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.general,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={6}
                            />

                            <InputText
                                autocomplete='bday'
                                inputName='birthDate'
                                control={control}
                                htmlFor='birthDate'
                                label='Fecha de nacimiento'
                                placeHolder='Ingresa fecha de nacimiento'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.name,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={6}
                            />

                            <InputText
                                autocomplete='passport'
                                inputName='passport'
                                control={control}
                                htmlFor='passport'
                                label='Pasaporte'
                                placeHolder='Ingresa pasaporte'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.general,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={false}
                                size={12}
                            />

                            <InputText
                                autocomplete='country'
                                inputName='country'
                                control={control}
                                htmlFor='country'
                                label='Pais'
                                placeHolder='Ingresa pais'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.name,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={12}
                            />

                            <InputText
                                autocomplete='country-name'
                                inputName='city'
                                control={control}
                                htmlFor='city'
                                label='Localidad'
                                placeHolder='Ingresa localidad'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.name,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={12}
                            />

                            <InputText
                                autocomplete='tel'
                                inputName='phone'
                                control={control}
                                htmlFor='phone'
                                label='Celular'
                                placeHolder='Ingresa celular'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.number,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={6}
                            />

                            <InputText
                                autocomplete='tel'
                                inputName='phoneHouse'
                                control={control}
                                htmlFor='phoneHouse'
                                label='Nro Hogar (opcional)'
                                placeHolder='Ingresa nro Hogar'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.number,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={false}
                                size={6}
                            />

                            <InputText
                                autocomplete='postalCode'
                                inputName='postalCode'
                                control={control}
                                htmlFor='postal-code'
                                label='Cod. Postal'
                                placeHolder='Ingresa codigo postal'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.general,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={6}
                            />

                            <InputText
                                autocomplete='on'
                                inputName='legado'
                                control={control}
                                htmlFor='fullName'
                                label='legado'
                                placeHolder='Ingresa nro. Legado'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.general,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={6}
                            />

                            <InputText
                                autocomplete='email'
                                inputName='email'
                                control={control}
                                htmlFor='email'
                                label='Correo electronico'
                                placeHolder='Ingresa correo electronico'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.email,
                                    message: 'Intentas ingresar caracteres no permitidos'
                                }}
                                required={true}
                                size={12}
                            />

                            <InputText
                                autocomplete='off'
                                inputName='startDate'
                                control={control}
                                htmlFor='startDate'
                                label='Fecha de inicio'
                                placeHolder='formato DD-MM-AAAA 01-12-2000'
                                inputType='text'
                                pattern={{
                                    value: regExValidation.date,
                                    message: 'Formato de fecha incorrecto'
                                }}
                                required={true}
                                size={12}
                            />
                        </Grid2>

                        <Box className={styles.center_Element}>
                            <Button type="submit"
                                className={stylesButtons.primaryButton}
                                sx={{
                                    width: '15rem !important', margin: '1rem 0'
                                }}
                            >
                                Guardar datos
                            </Button>
                        </Box>

                    </form>
                </Grid2>

                <Grid2 size={{ lg: 6 }} className={stylesLogIn.logInImg_Box}>
                    <img src={ImgEmploye} alt="imagen-empleado" className={stylesLogIn.logInImg} />
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default NewEmploye