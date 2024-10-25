import { Box } from "@mui/material"
import Drawer from "../drawer/Drawer"
import ResponsiveAppBar from "../navBar/NavBar"
import { Outlet } from "react-router-dom"

const ContentWrapper = () => {
    return (
        <Box sx={{ display: 'contens', position: 'relative' }}>
            <ResponsiveAppBar />
            <Drawer />
            <Outlet />
        </Box>
    )
}

export default ContentWrapper