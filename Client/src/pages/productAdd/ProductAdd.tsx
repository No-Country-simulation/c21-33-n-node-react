import { StylesButtoms } from "@/components/atoms/buttoms/StylesButtoms";
import InputText from "@/components/organisms/inputText/InputText"
import ModalSuccess from "@/components/organisms/modalSuccess/ModalSuccess";
import { ProductAddStyles } from "@/styles/componets/ProductAddStyles";
import { MainStyles } from "@/styles/MainStyles";
import { RegisterProduct } from "@/utils/interfaces/productsInterfaces";
import { regExValidation } from "@/utils/validations/Validations";
import { Box, Button, Container, Grid2, Typography } from "@mui/material"
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ProductAdd = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const { control, handleSubmit, /* setValue */ } = useForm<RegisterProduct>({
        defaultValues: {
            productCode: '',
            productName: '',
            productQty: '',
            productPrice: '',
            productCost: ''
        }
    });

    const { classes: styles } = MainStyles();
    const { classes: stylesProductAdd } = ProductAddStyles();
    const { classes: stylesButtons } = StylesButtoms();

    const handleSubmitData: SubmitHandler<RegisterProduct> = (data) => {
        console.log(data);
        setIsOpenModal(true);
    };

    return (
        <Container>

            <ModalSuccess
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
            />

            <Typography className={styles.titleSection}>
                Registro de productos
            </Typography>

            <Grid2 container>

                <Grid2 size={{ xs: 12 }} className={stylesProductAdd.container_MainSection}>
                    <form
                        onSubmit={handleSubmit(handleSubmitData)}
                    >

                        <InputText
                            autocomplete='on'
                            inputName='productCode'
                            control={control}
                            htmlFor='productCode'
                            label='Codigo del producto'
                            placeHolder='Ingresa codigo del producto'
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
                            inputName='productName'
                            control={control}
                            htmlFor='productName'
                            label='Nombre del producto'
                            placeHolder='Ingresa nombre del producto'
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
                            inputName='productQty'
                            control={control}
                            htmlFor='productQty'
                            label='Cantidad del producto'
                            placeHolder='Ingresa cantidad del producto'
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
                            inputName='productPrice'
                            control={control}
                            htmlFor='productPrice'
                            label='Precio del producto'
                            placeHolder='Ingresa precio del producto'
                            inputType='text'
                            pattern={{
                                value: regExValidation.number,
                                message: 'Intentas ingresar caracteres no permitidos'
                            }}
                            required={true}
                            size={12}
                        />

                        <InputText
                            autocomplete='on'
                            inputName='productCost'
                            control={control}
                            htmlFor='productCost'
                            label='Costo del producto'
                            placeHolder='Ingresa costo del producto'
                            inputType='text'
                            pattern={{
                                value: regExValidation.general,
                                message: 'Intentas ingresar caracteres no permitidos'
                            }}
                            required={true}
                            size={12}
                        />

                        <Box className={`
                            ${styles.center_Element}
                            ${styles.marginTop_Element}
                            `}>
                            <Button type="submit" className={stylesButtons.primaryButton}>
                                Guardar datos
                            </Button>
                        </Box>

                    </form>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default ProductAdd