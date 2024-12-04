import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
