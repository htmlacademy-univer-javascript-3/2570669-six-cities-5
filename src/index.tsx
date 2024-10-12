import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const Setting = {
  PlacesCount: 312,
}as const;

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <App placesCount={Setting.PlacesCount}/>
  </React.StrictMode>
);
