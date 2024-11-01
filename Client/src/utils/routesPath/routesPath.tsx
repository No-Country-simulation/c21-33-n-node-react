interface Routes {
    [key: string]: string
};

export const routesPath: Routes = {
    editEmployeInfo: 'employe-edit',
    employesAll: 'employe-all',
    home: '/app',
    landing: '/',
    login: '/login',
    newEmploye: 'new-employe',
    productAdd: 'product-add',
    profileEmploye: 'profile-employe',
    profileUser: 'profile-user',
    registerAccount: '/create-account'
}

export const routesLinkTo: Routes = {
    editEmployeInfo: `${routesPath.home}/${routesPath.editEmployeInfo}`,
    employesAll: `${routesPath.home}/${routesPath.employesAll}`,
    home: `${routesPath.home}`,
    landing: `${routesPath.landing}`,
    login: `${routesPath.login}`,
    newEmploye: `${routesPath.home}/${routesPath.newEmploye}`,
    productAdd: `${routesPath.home}/${routesPath.productAdd}`,
    profileEmploye: `${routesPath.home}/${routesPath.profileEmploye}`,
    profileUser: `${routesPath.home}/${routesPath.profileUser}`,
    registerAccount: '/create-account'
}