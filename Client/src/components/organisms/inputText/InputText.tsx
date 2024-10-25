import { FormControl, FormHelperText, Grid2, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { StylesOrganism } from '../StylesOrganism';

const InputText = ({ inputName, htmlFor, label, placeHolder }) => {


    const { classes: stylesOrganmis } = StylesOrganism();
    const { control } = useForm();

    return (
        <Grid2 className={stylesOrganmis.formInput}>
            <Controller
                name={inputName}
                control={control}
                rules={{
                    required: "Este campo es requerido",
                    /* pattern: {
                        message: "Formato de correo inválido",
                        value: regExValidation.email,
                    }, */
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
                            htmlFor={htmlFor}
                        >
                            <Typography className={stylesOrganmis.regularText}>
                                {label}
                            </Typography>
                        </label>

                        <TextField
                            id={inputName}
                            autoComplete="email"
                            type="text"
                            error={!!fieldState.error}
                            ref={ref}
                            onBlur={onBlur}
                            //className={styles.emailInput}
                            onChange={onChange}
                            value={value}
                            placeholder={placeHolder}
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
    )
}

export default InputText