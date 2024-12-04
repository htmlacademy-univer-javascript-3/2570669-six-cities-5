import store from '../store';
export type OffersType = {
  id: string;
  premium: boolean;
  imageUrl: string;
  price: number;
  bookmarked: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  title: string;
  description: string;
  type: string;
  owner: UserType;
  favorite: boolean;
  city: City;
};

export type City = {
    name: string;
    location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type UserType = {
  avatar: string;
  name: string;
  isPro: boolean;
};

export type ReviewType ={
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};

export type initialStateType = {
  city: string;
  offers: OffersType[];
  sortType: string;
  selectedMarker: {id: string} | null;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
