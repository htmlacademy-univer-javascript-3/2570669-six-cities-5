import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/types';
import { AxiosInstance } from 'axios';
import { OffersType, ExtendedOffer, ReviewType, CommentFormData } from '../types/types';
import { loadOffers, setOffersDataLoadingStatus,
  loadOfferDetails, sendReview, loadFavorites, updateOffers } from './offers-slice';
import { setError } from './setting-slice';
import { requireAuthorization } from './user-slice';
import { redirectToRoute } from './action';
import store from '.';
import AppRoute from '../const';
import { APIRoute, AuthorizationStatus } from '../const';
import { removeToken, saveToken } from '../token';
import { UserData, AuthData } from '../types/types';
import { saveEmail, removeEmail } from '../components/email';
import { removeProfileImg, saveProfileImg } from '../components/profile-img';
import { CheckFavoriteButton } from '../types/types';

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersType[]>(`${APIRoute.Favorite}`);
    dispatch(loadFavorites(data));
  },
);

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    try {
      const { data } = await api.get<OffersType[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const fetchOfferDataAction = createAsyncThunk<
  void,
  {
    id: string;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchOfferData', async ({ id }, { dispatch, extra: api }) => {
  const { data: selectedOffer } = await api.get<ExtendedOffer>(
    `${APIRoute.Offers}/${id}`
  );
  const { data: nearbyOffers } = await api.get<OffersType[]>(
    `${APIRoute.Offers}/${id}/nearby`
  );
  const { data: reviews } = await api.get<ReviewType[]>(
    `${APIRoute.Comments}/${id}`
  );
  dispatch(loadOfferDetails({ selectedOffer, nearbyOffers, reviews }));
});
export const sendCommentAction = createAsyncThunk<
  void,
  { comment: CommentFormData; id: string },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('offers/sendComment', async ({ comment, id }, { dispatch, extra: api }) => {
  const { data: review } = await api.post<ReviewType>(`${APIRoute.Comments}/${id}`,
    {
      comment: comment.comment,
      rating: comment.rating,
    });
  dispatch(sendReview(review));
});

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);
export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    saveEmail(email);
    dispatch(fetchOffers());
    dispatch(fetchFavoritesAction());
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MainScreen));
    const {data} = await api.get<UserData>(APIRoute.Login);
    saveProfileImg(data.avatarUrl);
  }
);
export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    removeEmail();
    removeProfileImg();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
export const clearError = createAsyncThunk<void, undefined>(
  'other/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), 5000);
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<void, CheckFavoriteButton, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/changeFavoriteStatus',
  async ({status, offerId}, {extra: api, dispatch}) => {
    const {data} = await api.post<OffersType>(`${APIRoute.Favorite}/${offerId}/${status}`);
    dispatch(updateOffers(data));
    dispatch(fetchFavoritesAction());
  },
);

