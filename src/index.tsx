import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.tsx';
import { Provider } from 'react-redux';
import store from './store';
import { checkAuth,fetchOffers } from './store/api-actions.ts';
import ErrorMessage from './components/error.tsx';

store.dispatch(fetchOffers());
store.dispatch(checkAuth());

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App/>
    </Provider>
  </React.StrictMode>
);
