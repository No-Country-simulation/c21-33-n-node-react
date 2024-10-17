import { Box, Container, Typography } from '@mui/material'
import ResponsiveAppBar from '../../components/organisms/navBar/NavBar'
import MainLogo from '../../assets/images/LOGO GestU 2.png'
import MainImg from '../../assets/images/lineas 1.png'
import PrimaryButtom from '../../components/atoms/buttoms/PrimaryButtom'
import { MainStyles } from '../../styles/MainStyles'
import { LandingStyles } from '../../styles/componets/LandingStyles'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    //https://jsonplaceholder.typicode.com/todos/1
    const { classes: styles } = MainStyles();
    const { classes: stylesCustom } = LandingStyles();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('app/login')
    };

    return (
        <>
            <ResponsiveAppBar />
            <Container>
                <Box className={styles.container}>
                    <img src={MainLogo} className={`${styles.maxWidth} ${stylesCustom.marginElements}`} />
                    <img src={MainImg} className={`${styles.maxWidth} ${stylesCustom.marginElements}`} />

                    <Typography className={stylesCustom.mainTitle}>
                        “Tu negocio, Tu control”
                    </Typography>

                    <PrimaryButtom
                        text={'¡Comenza!'}
                        onClick={handleNavigate}
                    />
                </Box>
            </Container>
        </>
    )
}

export default Landing