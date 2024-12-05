import { createReducer } from '@reduxjs/toolkit';
import { cityChange, sortTypeSelect, currentMarker, loadOffers, setError, requireAuthorization, setOffersDataLoadingStatus, saveEmail} from './action';
import { initialStateType } from '../types/types';
import { AuthorizationStatus } from '../const';

const initialState: initialStateType = {
  city: 'Paris',
  offers: [],
  sortType: 'Popular',
  selectedMarker: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  email: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sortTypeSelect, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(currentMarker, (state, action) => {
      state.selectedMarker = action.payload;
    })
    .addCase(loadOffers, (state, {payload}) => {
      state.offers = payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(saveEmail, (state, action) => {
      state.email = action.payload;
    });
});
