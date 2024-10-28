import React from "react";
import { useSelector } from "react-redux";

import { DrawerStyles } from "../../../styles/componets/DrawerStyles"
import { RootState } from "../../../redux/store";
import {
    IconInvetory, IconLogoDrawer, IconGrowing,
    IconUsers, IconEntryData, IconUserProfile
} from '../../../utils/icons/Index'


import { Box, Grid2, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { routesLinkTo } from "@/utils/routesPath/routesPath";


const Drawer = () => {

    const { classes: stylesDrawer } = DrawerStyles();
    const isOpenDrawer = useSelector((state: RootState) => state.drawer.value);
    const navigate = useNavigate();

    interface MenuOption {
        icon: React.ElementType,
        title: string,
        path: string
    }

    const menuOptions: MenuOption[] = [
        {
            icon: IconUserProfile,
            title: 'Mis datos',
            path: routesLinkTo.profile,
        },
        {
            icon: IconInvetory,
            title: 'Inventario',
            path: routesLinkTo.profile,
        },
        {
            icon: IconGrowing,
            title: 'Ventas',
            path: routesLinkTo.profile,
        },
        {
            icon: IconUsers,
            title: 'Empleados',
            path: '',
        },
        {
            icon: IconEntryData,
            title: 'Ingreso de empleados',
            path: routesLinkTo.newEmploye,
        },
    ]

    const handleNavigate = (url: string) => {
        console.log(url);
        navigate(url);
    };

    return (
        <Grid2 className={stylesDrawer.container} sx={{
            left: {
                xs: isOpenDrawer ? '-100%' : '0',
                lg: '0'
            }
        }}
        >

            <IconLogoDrawer styles={stylesDrawer.mainIconSidebar} />

            {
                menuOptions.map(option => (
                    <Box
                        key={option.title}
                        className={stylesDrawer.menuOption}
                        onClick={() => handleNavigate(option.path)}
                    >
                        <option.icon styles={stylesDrawer.iconsSidebar} />
                        <Typography>{option.title}</Typography>
                    </Box>
                ))
            }

        </Grid2 >
    )
}

export default Drawer