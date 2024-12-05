import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/types';
import { AxiosInstance } from 'axios';
import { OffersType } from '../types/types';
import { loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import store from '.';
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
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
    setTimeout(() => store.dispatch(setError(null)), 2000);
  }
);
