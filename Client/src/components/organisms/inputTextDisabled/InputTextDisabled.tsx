import { Grid2, TextField, Typography } from "@mui/material"
import { StylesOrganism } from "../StylesOrganism"
import { InputTextUserInfoDisabled } from "@/utils/interfaces";

const InputTextDisabled = ({
    label,
    size,
    value
}: InputTextUserInfoDisabled) => {
    const { classes: stylesOrganmis } = StylesOrganism();
    return (
        <Grid2 size={{ xs: size }}>
            <label>
                <Typography className={stylesOrganmis.regularText}>
                    {label}
                </Typography>
            </label>

            <TextField
                aria-readonly
                value={value}
                fullWidth
            />
        </Grid2>
    )
}

export default InputTextDisabled