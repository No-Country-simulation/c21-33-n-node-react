import { Routes as RouterRoutes, Route } from "react-router-dom"
import Landing from '../pages/landing/Landing';
//import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import ContentWrapper from "../components/organisms/contentWrapper/ContentWrapper"
import Home from "../pages/home/Home"
import Profile from "../pages/profile/Profile"
import { routesPath } from "../utils/routesPath/routesPath"
import RegisterUSerAccount from "@/pages/registerUserAccount/RegisterUSerAccount";
import NewEmploye from "@/pages/newEmploye/NewEmploye";
import EmployeProfile from "@/pages/employeProfile/EmployeProfile";
import ProductAdd from "@/pages/productAdd/ProductAdd";
import EmployeList from "@/pages/employeList/EmployeList";
import ProductList from "@/pages/productList/ProductList";

const Routes = () => {
    return (
        <RouterRoutes >

            <Route path={routesPath.landing} element={<Landing />} />

            <Route path={routesPath.login} element={<Login />} />

            <Route path={routesPath.registerAccount} element={<RegisterUSerAccount />} />

            <Route path={routesPath.home} element={<ContentWrapper />} >
                <Route index element={<Home />} />
                <Route path={routesPath.profileUser} element={<Profile />} />
                <Route path={routesPath.productList} element={<ProductList />} />
                <Route path="sales" element={<Home />} />
                <Route path={routesPath.employesAll} element={<EmployeList />} />
                <Route path={routesPath.newEmploye} element={<NewEmploye />} />
                <Route path={`${routesPath.profileEmploye}/:id`} element={<EmployeProfile />} />
                <Route path={routesPath.editEmployeInfo} element={<NewEmploye />} />
                <Route path={routesPath.productAdd} element={<ProductAdd />} />
            </Route>
        </RouterRoutes>
    )
}

export default Routes