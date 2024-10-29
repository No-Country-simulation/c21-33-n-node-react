interface Routes {
    [key: string]: string
};

export const routesPath: Routes = {
    editEmployeInfo: 'employe-edit',
    home: '/app',
    landing: '/',
    login: '/login',
    newEmploye: 'new-employe',
    profileEmploye: 'profile-employe',
    profileUser: 'profile-user',
    registerAccount: '/create-account'
}

export const routesLinkTo: Routes = {
    editEmployeInfo: `${routesPath.home}/${routesPath.editEmployeInfo}`,
    home: `${routesPath.home}`,
    landing: `${routesPath.landing}`,
    login: `${routesPath.login}`,
    newEmploye: `${routesPath.home}/${routesPath.newEmploye}`,
    profileEmploye: `${routesPath.home}/${routesPath.profileEmploye}`,
    profileUser: `${routesPath.home}/${routesPath.profileUser}`,
    registerAccount: '/create-account'
}