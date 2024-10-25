import { Button, Container, FormControl, FormHelperText, Grid2, TextField, Typography } from "@mui/material";
import LogInImg from '../../assets/images/login_img.png';
import { MainStyles } from "../../styles/MainStyles";
import { Controller, useForm } from "react-hook-form";
import { regExValidation } from "../../utils/validations/Validations";
import { LogInData } from "../../utils/interfaces/interfaces";
import { LogInStyles } from "../../styles/componets/LogInStyles";
import { useRef } from "react";
import { StylesButtoms } from "../../components/atoms/buttoms/StylesButtoms";
import ResponsiveAppBar from "../../components/organisms/navBar/NavBar";
import { getDate } from "../../utils/utilities/Utilities";

const Login = () => {

  const { classes: styles } = MainStyles();
  const { classes: stylesLogIn } = LogInStyles();
  const { classes: stylesButtoms } = StylesButtoms();

  const formRef = useRef<HTMLFormElement>(null);

  const {
    control,
    handleSubmit,
    //formState: { errors },
    setValue,
    //watch,
    //clearErrors,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const getDateTime = getDate();
  console.log({ getDateTime })

  const handleSubmitData = async (data: LogInData) => {
    console.log(data)
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container className={`${styles.container} ${stylesLogIn.containerStyles}`}>
        <Grid2 container className={stylesLogIn.mainContent}>

          <Grid2 size={{ xs: 12, md: 6 }} className={stylesLogIn.loginForm_box}>
            <Typography className={stylesLogIn.mainTitle}>¡BUENOS DÍAS!</Typography>
            <Typography className={`${stylesLogIn.regularText} ${stylesLogIn.contentSpace}`}>
              {`Son las ${getDateTime.formattedTime} de ${getDateTime.formattedDate}`}
            </Typography>

            <form
              onSubmit={handleSubmit(handleSubmitData)}
              ref={formRef}
              className={stylesLogIn.formStyles}
            >

              <Grid2 className={stylesLogIn.formInput}>
                <Controller
                  name={`email`}
                  control={control}
                  rules={{
                    required: "Este campo es requerido",
                    pattern: {
                      message: "Formato de correo inválido",
                      value: regExValidation.email,
                    },
                  }}
                  render={({
                    field: {
                      onChange,
                      onBlur,
                      value,
                      ref,
                    },
                    fieldState,
                  }) => (
                    <FormControl
                      fullWidth
                      error={!!fieldState.error}
                    >
                      <label
                        htmlFor="email"
                      >
                        <Typography className={stylesLogIn.regularText}>
                          Usuario
                        </Typography>
                      </label>

                      <TextField
                        id="email"
                        autoComplete="email"
                        type="text"
                        error={!!fieldState.error}
                        ref={ref}
                        onBlur={onBlur}
                        //className={styles.emailInput}
                        onChange={(e) => {
                          onChange(e);
                          const deleteSpaces = e.target.value.replace(/\s/g, '');
                          setValue('email', deleteSpaces);
                        }}
                        value={value}
                        placeholder={"tucorreo@mail.com"}
                        color={fieldState.error ? "error" : "success"}
                        focused={fieldState.isTouched || fieldState.isDirty}
                        fullWidth
                      />

                      <FormHelperText
                        hidden={fieldState.error ? false : true}
                      >
                        {fieldState.error ? fieldState.error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
              </Grid2>

              <Grid2 className={stylesLogIn.formInput}>
                <Controller
                  name={`password`}
                  control={control}
                  rules={{
                    required: "Este campo es requerido"
                  }}
                  render={({
                    field: {
                      onChange,
                      onBlur,
                      value,
                      ref,
                    },
                    fieldState,
                  }) => (
                    <FormControl
                      fullWidth
                      error={!!fieldState.error}
                    >
                      <label
                        className={''}
                        htmlFor="password"
                      >
                        <Typography className={stylesLogIn.regularText}>
                          Contraseña
                        </Typography>
                      </label>

                      <TextField
                        id="password"
                        autoComplete="off"
                        type="password"
                        error={!!fieldState.error}
                        ref={ref}
                        onBlur={onBlur}
                        //className={styles.emailInput}
                        onChange={onChange}
                        value={value}
                        placeholder={"Ingresa tu contraseña"}
                        color={fieldState.error ? "error" : "success"}
                        focused={fieldState.isTouched || fieldState.isDirty}
                        fullWidth
                      />

                      <FormHelperText
                        hidden={fieldState.error ? false : true}
                      >
                        {fieldState.error ? fieldState.error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                />

              </Grid2>

              <Grid2 className={stylesLogIn.formInput}>

                <Button
                  type="submit"
                  className={stylesButtoms.primaryButton}
                >
                  Iniciar Sesión
                </Button>

              </Grid2>
            </form>

            <Typography className={stylesLogIn.smallText}>
              ¿Olvidaste tu contraseña? Recupérala aquí.
            </Typography>

          </Grid2>

          <Grid2 size={{ md: 6 }} className={stylesLogIn.logInImg_Box}>
            <img src={LogInImg} alt="imagen-login" className={stylesLogIn.logInImg} />
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}

export default Login