import { createReducer } from '@reduxjs/toolkit';
import { OffersType } from '../types/types';
import { listFilling, cityChange } from './action';
import {offers as mockOffers} from '../mocks/offers';
import { initialStateType } from '../types/types';

const initialState: initialStateType = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 5
    }
  },
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, { payload }) => {
      state.city.name = payload as unknown as string;
    })
    .addCase(listFilling, (state, { payload }) => {
      state.offers = payload ? (payload as OffersType[]) : mockOffers;
    });
});
