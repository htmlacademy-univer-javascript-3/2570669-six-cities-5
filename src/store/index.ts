import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { initializeAPI } from '../api';
import redirectMiddleware from './redirect';


export const api = initializeAPI();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirectMiddleware),
});

export default store;

