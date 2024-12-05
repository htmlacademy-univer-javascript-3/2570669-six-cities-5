import {createAction} from '@reduxjs/toolkit';
import { OffersType } from '../types/types';
import { AuthorizationStatus } from '../const';
import AppRoute from '../const';

export const cityChange = createAction<string>('сityChange');
export const listFilling = createAction('listFilling');
export const currentMarker = createAction<{ id: string } | null>('currentMarker');

export const sortTypeSelect = createAction<string>('sortTypeSelect');

export const loadOffers = createAction<OffersType[]>('loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');
export const setError = createAction<string | null>('setError');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const saveEmail = createAction<string>('user/saveEmail');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
