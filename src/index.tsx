import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import offers from './mocks/offers';
import { reviews } from './mocks/reviews';

const Setting = {
  PlacesCount: 312,
} as const;

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <App placesCount={Setting.PlacesCount} offers={offers} favorites={offers} reviews={reviews} />
  </React.StrictMode>
);
