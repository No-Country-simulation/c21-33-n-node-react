import { Button, Grid2 } from "@mui/material"
import InputText from "../inputText/InputText"
import { useForm, SubmitHandler } from "react-hook-form"
import { regExValidation } from "@/utils/validations/Validations";
import { StylesButtoms } from "@/components/atoms/buttoms/StylesButtoms";
import { EmployeFormFilter } from "@/utils/interfaces";

const EmployeListFormFilter = () => {

    const { control, handleSubmit } = useForm<EmployeFormFilter>({
        defaultValues: {
            firstName: '',
            lastName: '',
            state: '',
            IDCode: '',
            startDate: '',
            position: ''
        }
    });
    const { classes: buttonsStyles } = StylesButtoms();

    const handleSubmitData: SubmitHandler<EmployeFormFilter> = (data) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(handleSubmitData)}>
            <Grid2 container spacing={2}>
                <InputText
                    autocomplete={'on'}
                    htmlFor={'firstName'}
                    control={control}
                    inputName={'firstName'}
                    inputType={'text'}
                    label={'Nombres'}
                    placeHolder={'Ingresa nombre'}
                    pattern={{
                        message: 'Intentas ingresar caracteres no validos',
                        value: regExValidation.name
                    }}
                    required={false}
                    size={6}
                />

                <InputText
                    autocomplete={'on'}
                    htmlFor={'lastName'}
                    control={control}
                    inputName={'lastName'}
                    inputType={'text'}
                    label={'Apellidos'}
                    placeHolder={'Ingresa apellido'}
                    pattern={{
                        message: 'Intentas ingresar caracteres no validos',
                        value: regExValidation.name
                    }}
                    required={false}
                    size={6}
                />

                <InputText
                    autocomplete={'on'}
                    htmlFor={'state'}
                    control={control}
                    inputName={'state'}
                    inputType={'text'}
                    label={'Estado'}
                    placeHolder={'Ingresa estado'}
                    pattern={{
                        message: 'Intentas ingresar caracteres no validos',
                        value: regExValidation.name
                    }}
                    required={false}
                    size={6}
                />

                <InputText
                    autocomplete={'on'}
                    htmlFor={'IDCode'}
                    control={control}
                    inputName={'IDCode'}
                    inputType={'text'}
                    label={'Nro de legajo o ID'}
                    placeHolder={'Ingresa Nro de legajo o ID'}
                    pattern={{
                        message: 'Intentas ingresar caracteres no validos',
                        value: regExValidation.general
                    }}
                    required={false}
                    size={6}
                />

                <InputText
                    autocomplete={'on'}
                    htmlFor={'startDate'}
                    control={control}
                    inputName={'startDate'}
                    inputType={'text'}
                    label={'Fecha de ingreso'}
                    placeHolder={'Ingresa fecha de ingreso'}
                    pattern={{
                        message: 'Intentas ingresar caracteres no validos',
                        value: regExValidation.date
                    }}
                    required={false}
                    size={6}
                />

                <InputText
                    autocomplete={'on'}
                    htmlFor={'position'}
                    control={control}
                    inputName={'position'}
                    inputType={'text'}
                    label={'Puesto'}
                    placeHolder={'Ingresa puesto'}
                    pattern={{
                        message: 'Intentas ingresar caracteres no validos',
                        value: regExValidation.general
                    }}
                    required={false}
                    size={6}
                />

            </Grid2>

            <Grid2 sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '2rem 0'
            }}>
                <Button className={buttonsStyles.primaryButton}
                    type="submit"
                >
                    Buscar
                </Button>

                <Button className={buttonsStyles.primaryButton}>
                    Limpiar
                </Button>
            </Grid2>
        </form>
    )
}

export default EmployeListFormFilter