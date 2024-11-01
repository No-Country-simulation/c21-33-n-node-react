import PrimaryButtom from "@/components/atoms/buttoms/PrimaryButtom";
import Table from "@/components/organisms/table/Table";
import { Product } from "@/redux/features/products/products";
import { RootState } from "@/redux/store";
import { MainStyles } from "@/styles/MainStyles";
import { routesLinkTo } from "@/utils/routesPath/routesPath";
import { Box, Container, Grid2, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductList = () => {

    const { classes: styles } = MainStyles();
    const { products } = useSelector((state: RootState) => state.products);
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(routesLinkTo.productAdd)
    };

    useEffect(() => {
        setProductList(products)
    }, [products]);

    return (
        <Container>
            <Grid2>
                <Typography className={styles.titleSection}>Inventario</Typography>

                <Box className={styles.rigth_Element}>
                    <PrimaryButtom
                        text="Agregar producto"
                        onClick={handleNavigate}
                    />
                </Box>

                <Grid2>
                    <Table productList={products} />
                </Grid2>

            </Grid2>
        </Container>
    )
}

export default ProductList