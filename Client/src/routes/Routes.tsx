import { Routes as RouterRoutes, Route } from "react-router-dom"
import Landing from "../pages/landing/Landing"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import ContentWrapper from "../components/organisms/contentWrapper/ContentWrapper"

const Routes = () => {
    return (
        <RouterRoutes >
            <Route path="/" element={<Landing />} />

            <Route path="/app/login" element={<Login />} />

            <Route path="/app" element={<ContentWrapper />}>

            </Route>
        </RouterRoutes>
    )
}

export default Routes