enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  MainScreen = 'MainScreen',
  Comments = '/comments'
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum MapClasses {
  SectionMainMapClass = 'cities__map map',
  SectionPropertyMapClass = 'offer__map map',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export default AppRoute;

export const CARD_WIDTH = '260';
export const CARD_HEIGHT = '260';
export const BOOKMARK_ICON_WIDTH = '18';
export const BOOKMARK_ICON_HEIGHT = '19';
// export const enum CardSize {
//   Size = 260
// }
// export const enum Bookmark {
//   Width = 18,
//   Height = 19
// }
export enum FavoriteCard {
  Width = 150,
  Height = 110
}
export const SORT_TYPES = {
  0: 'Popular',
  1: 'Price: low to high',
  2: 'Price: high to low',
  3: 'Top rated first',
};
export const SORTING_WIDTH = '7';
export const SORTING_HEIGHT = '4';

export enum StateKey {
  AppSettings = 'APPSETTINGS',
  Offers = 'OFFERS',
  User = 'USER',
}

export enum FavoriteStatus {
  Add = 1,
  Remove = 0,
}

export const citiesForRandomString = ['Amsterdam', 'Paris', 'Cologne', 'Brussels', 'Hamburg', 'Dusseldorf'];
