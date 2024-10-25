interface Routes {
    [key: string]: string
};

export const routesPath: Routes = {
    home: '/app',
    landing: '/',
    login: 'login',
    newEmploye: 'new-employe',
    profile: 'profile'
}

export const routesLinkTo: Routes = {
    home: `${routesPath.home}`,
    landing: `${routesPath.landing}`,
    login: `${routesPath.login}`,
    newEmploye: `${routesPath.home}/${routesPath.newEmploye}`,
    profile: `${routesPath.home}/${routesPath.profile}`
}