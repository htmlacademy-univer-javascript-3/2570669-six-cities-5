import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from './pages/Main';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import NotFound from './Not-found';
import AppRoute, { AuthorizationStatus } from '../const';
import PrivateRoute from './private-route';
import { ReviewType, OffersType} from '../types/types';
import { Provider } from 'react-redux';
import { store } from '../store';

type AppScreenProps = {
  placesCount: number;
  offers: OffersType[];
  favorites: OffersType[];
  reviews: ReviewType[];
};

function App({ placesCount, offers, favorites, reviews }: AppScreenProps) {
  const filterfavorites = favorites.filter((o) => o.favorite);
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<MainScreen placesCount={placesCount} favorites={filterfavorites} />}
            />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <Favorites favorites={favorites} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer offers={offers} reviews={reviews}/>}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
export default App;
