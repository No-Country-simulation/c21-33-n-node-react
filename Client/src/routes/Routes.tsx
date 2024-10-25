import { Routes as RouterRoutes, Route } from "react-router-dom"
import Landing from '../pages/landing/Landing';
//import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import ContentWrapper from "../components/organisms/contentWrapper/ContentWrapper"
import Home from "../pages/home/Home"
import Profile from "../pages/profile/Profile"
import { routesPath } from "../utils/routesPath/routesPath"

const Routes = () => {
    return (
        <RouterRoutes >

            <Route path={routesPath.landing} element={<Landing />} />

            <Route path={routesPath.login} element={<Login />} />

            <Route path={routesPath.home} element={<ContentWrapper />} >
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="inventory" element={<Home />} />
                <Route path="sales" element={<Home />} />
                <Route path={routesPath.employes} element={<Home />} />
                <Route path={routesPath.newEmploye} element={<Home />} />
            </Route>
        </RouterRoutes>
    )
}

export default Routes