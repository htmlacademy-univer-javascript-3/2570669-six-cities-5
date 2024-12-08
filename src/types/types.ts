import store from '../store';
import { AuthorizationStatus } from '../const';
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
  location: Location;
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
  error: string | null;
  city: string;
  offers: OffersType[];
  sortType: string;
  selectedMarker: {id: string} | null;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  email: string | null;
  currentOffer: {
    offerInfo: ExtendedOffer | null;
    nearestOffers: OffersType[];
    reviews: ReviewType[];
  };
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export type Points = {
  id: string;
  location: Location;
}

export type CommentFormData = {
  comment: string;
  rating: number;
};

export type Host = {
  name: string;
  avatar: string;
  isPro: boolean;
}

export type ExtendedOffer = Omit<OffersType, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  maxAdults: number;
  images: string[];
}

export type OfferData = {
  offerInfo: ExtendedOffer;
  nearestOffers: OffersType[];
  reviews: ReviewType[];
};

