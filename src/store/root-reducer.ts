import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user-slice/user-slice.ts';
import { appSettingsSlice } from './app-settings/setting-slice.ts';
import { offersSlice } from './offers-slice/offers-slice.ts';
import { StateKey } from '../const.ts';

export const rootReducer = combineReducers({
  [StateKey.Offers]: offersSlice.reducer,
  [StateKey.AppSettings]: appSettingsSlice.reducer,
  [StateKey.User]: userSlice.reducer,
});
