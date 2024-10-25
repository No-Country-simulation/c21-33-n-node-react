import { Grid2 } from "@mui/material"
import Drawer from "../drawer/Drawer"
import ResponsiveAppBar from "../navBar/NavBar"
import { Outlet } from "react-router-dom"

const ContentWrapper = () => {
    return (
        <Grid2 sx={{ display: 'contens', position: 'relative' }}>
            <ResponsiveAppBar />
            <Grid2 sx={{ display: 'flex' }}>
                <Drawer />
                <Outlet />
            </Grid2>
        </Grid2>
    )
}

export default ContentWrapper