import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { initializeAPI } from '../api';


export const api = initializeAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export default store;

