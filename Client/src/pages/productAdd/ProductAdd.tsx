import { StylesButtoms } from "@/components/atoms/buttoms/StylesButtoms";
import InputText from "@/components/organisms/inputText/InputText"
import ModalSuccess from "@/components/organisms/modalSuccess/ModalSuccess";
import { addProduct, Product } from "@/redux/features/products/products";
import { RootState } from "@/redux/store";
import { ProductAddStyles } from "@/styles/componets/ProductAddStyles";
import { MainStyles } from "@/styles/MainStyles";
import { regExValidation } from "@/utils/validations/Validations";
import { Box, Button, Container, Grid2, Typography } from "@mui/material"
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ProductAdd = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({
        status: '',
        message: ''
    })
    const { control, handleSubmit, /* setValue */ } = useForm<Product>({
        defaultValues: {
            code: '',
            productName: '',
            qty: '',
            price: '',
            cost: ''
        }
    });
    const { products } = useSelector((state: RootState) => state.products);

    const { classes: styles } = MainStyles();
    const { classes: stylesProductAdd } = ProductAddStyles();
    const { classes: stylesButtons } = StylesButtoms();
    const dispatch = useDispatch();

    const handleSubmitData: SubmitHandler<Product> = (data) => {
        console.log(data);
        const isProductExist: Product | undefined = products.find(product => product.code === data.code);
        if (isProductExist) {
            console.log(isProductExist)
            setModalInfo({
                status: 'error',
                message: 'Ya existe un producto con este codigo'
            });
            setIsOpenModal(true);
        } else {
            dispatch(addProduct(data))
            setModalInfo({
                status: 'success',
                message: 'Producto agregado con exito'
            });
            setIsOpenModal(true);
        }
    };

    return (
        <Container>

            <ModalSuccess
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                status={modalInfo.status}
                message={modalInfo.message}
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
                            inputName='code'
                            control={control}
                            htmlFor='code'
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
                            inputName='qty'
                            control={control}
                            htmlFor='qty'
                            label='Cantidad del producto'
                            placeHolder='Ingresa cantidad del producto'
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
                            inputName='price'
                            control={control}
                            htmlFor='price'
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
                            inputName='cost'
                            control={control}
                            htmlFor='cost'
                            label='Costo del producto'
                            placeHolder='Ingresa costo del producto'
                            inputType='text'
                            pattern={{
                                value: regExValidation.number,
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