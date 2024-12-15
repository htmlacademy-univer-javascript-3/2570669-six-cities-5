import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/types';
import { AxiosInstance } from 'axios';
import { OffersType, ExtendedOffer, ReviewType, CommentFormData } from '../types/types';
import { loadOffers, setOffersDataLoadingStatus,
  loadOfferDetails, sendReview } from './offers-slice';
import { setError } from './setting-slice';
import { requireAuthorization, saveEmail } from './user-slice';
import { redirectToRoute } from './action';
import store from '.';
import AppRoute from '../const';
import { APIRoute, AuthorizationStatus } from '../const';
import { removeToken, saveToken } from '../token';
import { UserData, AuthData } from '../types/types';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    try {
      const response = await api.get<OffersType[]>(APIRoute.Offers);
      dispatch(loadOffers(response.data));
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
>('fetchOfferData', async ({ id }, { dispatch, extra: api }) => {
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
>('sendComment', async ({ comment, id }, { dispatch, extra: api }) => {
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
    const response = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(response.data.token);
    dispatch(saveEmail(email));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MainScreen));
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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
export const clearError = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), 5000);
  }
);
