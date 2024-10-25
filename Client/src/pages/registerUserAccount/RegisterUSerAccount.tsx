import { SubmitHandler, useForm } from "react-hook-form";

import { Box, Button, Container, Grid2, Typography } from "@mui/material"

import { RegisterUserAccount } from "../../utils/interfaces/userInterfaces";
import InputText from "@/components/organisms/inputText/InputText";
import LogInImg from "@/assets/images/login_img.png";
import { LogInStyles } from "@/styles/componets/LogInStyles";
import { MainStyles } from "@/styles/MainStyles";
import { StylesButtoms } from "@/components/atoms/buttoms/StylesButtoms";
import ResponsiveAppBar from "@/components/organisms/navBar/NavBar";
import { Link } from "react-router-dom";
import { routesLinkTo } from '../../utils/routesPath/routesPath';


const RegisterUSerAccount = () => {

    const { control, handleSubmit, setValue } = useForm<RegisterUserAccount>({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            passwordRepeat: ""

        }
    });

    const { classes: styles } = MainStyles();
    const { classes: stylesLogIn } = LogInStyles();
    const { classes: stylesButtons } = StylesButtoms();

    const handleSubmitData: SubmitHandler<RegisterUserAccount> = (data) => {
        console.log(data)
    };

    return (
        <>
            <ResponsiveAppBar />

            <Container>

                <Grid2 container className={styles.container_Section}>
                    <Grid2 size={{ md: 6 }}>
                        <form
                            onSubmit={handleSubmit(handleSubmitData)}
                        //className={stylesLogIn.formStyles}
                        >
                            <InputText
                                autocomplete='name'
                                inputName='fullName'
                                control={control}
                                htmlFor='fullName'
                                label='Nombre'
                                placeHolder='Ingresa tu nombre'
                                inputType='text'
                            />

                            <InputText
                                autocomplete='email'
                                inputName='email'
                                control={control}
                                htmlFor='email'
                                label='Correo'
                                placeHolder='Ingresa tu correo'
                                inputType='text'
                            />

                            <InputText
                                autocomplete='off'
                                inputName='password'
                                control={control}
                                htmlFor='password'
                                label='Contraseña'
                                placeHolder='Ingresa tu contraseña'
                                inputType='password'
                            />

                            <InputText
                                autocomplete='off'
                                inputName='passwordRepeat'
                                control={control}
                                htmlFor='password-repeat'
                                label='Confirma contraseña'
                                placeHolder='Repite tu contraseña'
                                inputType='password'
                            />

                            <Box className={styles.center_Element}>
                                <Button
                                    type="submit"
                                    className={stylesButtons.primaryButton}
                                    sx={{ width: '15rem !important', margin: '1rem 0 0 0' }}
                                >
                                    Crear cuenta
                                </Button>

                                <Typography className={stylesLogIn.smallText}>
                                    Ya tienes una cuenta? {" "}
                                    <Link to={routesLinkTo.login} className={stylesLogIn.smallText_Link}>
                                        inicia sesion aqui
                                    </Link>
                                </Typography>
                            </Box>
                        </form>
                    </Grid2>

                    <Grid2 size={{ md: 6 }} className={stylesLogIn.logInImg_Box}>
                        <img src={LogInImg} alt="imagen-login" className={stylesLogIn.logInImg} />
                    </Grid2>
                </Grid2>
            </Container>
        </>
    )
}

export default RegisterUSerAccount