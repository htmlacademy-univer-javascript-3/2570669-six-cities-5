enum AppRoute{
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export default AppRoute;
