import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { initializeAPI } from '../api';
import redirectMiddleware from './redirect';


export const api = initializeAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirectMiddleware),
});

export default store;

