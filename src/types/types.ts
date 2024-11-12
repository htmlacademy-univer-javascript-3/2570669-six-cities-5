import { store } from '../store';
export type OffersType = {
  id: number;
  premium: boolean;
  imageUrl: string;
  price: number;
  bookmarked: boolean;
  rating: number;
  title: string;
  type: string;
  favorite: boolean;
  city: City;
  };

export type City = {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
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
  city: City;
  offers: OffersType[];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
