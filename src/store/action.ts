import {createAction} from '@reduxjs/toolkit';
import { OffersType, ReviewType, OfferData } from '../types/types';
import { AuthorizationStatus } from '../const';
import AppRoute from '../const';


export const cityChange = createAction<string>('сity/change');
export const listFilling = createAction('list/fill');
export const currentMarker = createAction<{ id: string } | null>('marker/setCurrent');

export const sortTypeSelect = createAction<string>('sort/selectType');

export const loadOffers = createAction<OffersType[]>('offers/load');
export const setOffersDataLoadingStatus = createAction<boolean>('offers/setLoadingStatus');
export const setError = createAction<string | null>('error/set');
export const requireAuthorization = createAction<AuthorizationStatus>('auth/setStatus');

export const saveEmail = createAction<string>('user/saveEmail');
export const redirectToRoute = createAction<AppRoute>('route/redirect');

export const loadOfferDetails = createAction<OfferData>('offer/loadDetails');
export const sendReview = createAction<ReviewType>('review/sendReview');
