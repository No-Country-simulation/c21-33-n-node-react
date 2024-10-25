import { Container } from "@mui/material"
import { useForm } from "react-hook-form";
import { RegisterUserAccount } from "../../utils/interfaces/interfaces";
import InputText from "../../components/organisms/inputText/InputText";

const RegisterUSerAccount = () => {

    const { handleSubmit, setValue } = useForm();

    const handleSubmitData = (data: RegisterUserAccount) => {
        console.log(data)
    };

    return (
        <Container>
            <form
                onSubmit={handleSubmit(handleSubmitData)}
            //className={stylesLogIn.formStyles}
            >
                <InputText
                    inputName='name'
                    htmlFor='name'
                    label='Nombre'
                    placeHolder='Ingresa tu nombre'
                />

                <InputText
                    inputName='email'
                    htmlFor='email'
                    label='Correo'
                    placeHolder='Ingresa tu correo'
                />

                <InputText
                    inputName='password'
                    htmlFor='password'
                    label='Contraseña'
                    placeHolder='Ingresa tu contraseña'
                />

                <InputText
                    inputName='password-repeat'
                    htmlFor='password-repeat'
                    label='Repite contraseña'
                    placeHolder='Repite tu contraseña'
                />

            </form>
        </Container>
    )
}

export default RegisterUSerAccount