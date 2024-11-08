//import React from 'react'
import { HomeStyles } from '@/styles/componets/Home';
import { Button, Container, Grid2 } from '@mui/material'
//import { useDispatch, useSelector } from 'react-redux';
//import { RootState } from '../../redux/store';
//import { decrement, increment, incrementByAmount } from '../../redux/features/counter/counterSlice';
//import { changeThemeMode } from '../../redux/features/themeMode/themeSlice';

const Home = () => {

    const { classes: homeStyles } = HomeStyles();
    /* const { value } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch(); */

    return (
        <Container>

            <Grid2 className={homeStyles.routeButtons_container}>

                <Grid2 className={homeStyles.routeButtons_box}>
                    <Button className={homeStyles.routeButtons_button}>
                        Gestion de inventario
                    </Button>
                </Grid2>

                <Grid2 className={homeStyles.routeButtons_box}>
                    <Button className={homeStyles.routeButtons_button}>
                        Gestion de inventario
                    </Button>
                </Grid2>

                <Grid2 className={homeStyles.routeButtons_box}>
                    <Button className={homeStyles.routeButtons_button}>
                        Gestion de Ventas
                    </Button>
                </Grid2>
            </Grid2>
            {/* <h1>Vite + React</h1>
            <div className="card">
                <Button variant='contained' onClick={() => dispatch(increment())}>
                    increment
                </Button>
                <Button variant='contained' color='secondary' onClick={() => dispatch(decrement())}>
                    decrement
                </Button>
                <Button variant='contained' onClick={() => dispatch(incrementByAmount(10))}>
                    increment by 10
                </Button>
                <Button variant='contained' onClick={() => dispatch(changeThemeMode('dark'))}>
                    setDarkMMode
                </Button>
                <Button variant='contained' onClick={() => dispatch(changeThemeMode('light'))}>
                    setLightMode
                </Button>
                <button>
                    count is {value}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p> */}
        </Container>
    )
}

export default Home;