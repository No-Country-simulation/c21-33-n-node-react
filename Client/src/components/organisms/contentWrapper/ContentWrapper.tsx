import { Box } from "@mui/material"
import Drawer from "../drawer/Drawer"
import ResponsiveAppBar from "../navBar/NavBar"

const ContentWrapper = () => {
    return (
        <Box sx={{ display: 'contens', position: 'relative' }}>
            <ResponsiveAppBar />
            <Drawer />
        </Box>
    )
}

export default ContentWrapper