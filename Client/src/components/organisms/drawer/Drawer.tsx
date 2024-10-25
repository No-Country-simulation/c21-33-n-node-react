import React from "react";
import { useSelector } from "react-redux";

import { DrawerStyles } from "../../../styles/componets/DrawerStyles"
import { RootState } from "../../../redux/store";
import {
    IconInvetory, IconLogoDrawer, IconGrowing,
    IconUsers, IconEntryData, IconUserProfile
} from '../../../utils/icons/Index'


import { Box, Grid2, Typography } from "@mui/material"


const Drawer = () => {

    const { classes: stylesDrawer } = DrawerStyles();
    const isOpenDrawer = useSelector((state: RootState) => state.drawer.value);

    interface MenuOption {
        icon: React.ElementType,
        title: string,
        path: string
    }

    const menuOptions: MenuOption[] = [
        {
            icon: IconUserProfile,
            title: 'Mis datos',
            path: '',
        },
        {
            icon: IconInvetory,
            title: 'Inventario',
            path: '',
        },
        {
            icon: IconGrowing,
            title: 'Ventas',
            path: '',
        },
        {
            icon: IconUsers,
            title: 'Empleados',
            path: '',
        },
        {
            icon: IconEntryData,
            title: 'Ingreso de empleados',
            path: '',
        },
    ]

    return (
        <Grid2 className={stylesDrawer.container} sx={{
            left: {
                xs: isOpenDrawer ? '-100%' : '0',
                md: '0'
            }
        }}
        >

            <IconLogoDrawer styles={stylesDrawer.mainIconSidebar} />

            {
                menuOptions.map(option => (
                    <Box key={option.title} className={stylesDrawer.menuOption}>
                        <option.icon styles={stylesDrawer.iconsSidebar} />
                        <Typography>{option.title}</Typography>
                    </Box>
                ))
            }

        </Grid2 >
    )
}

export default Drawer