import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from './pages/Main';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import NotFound from './Not-found';
import AppRoute, { AuthorizationStatus } from '../const';
import PrivateRoute from './private-route';
import { ReviewType} from '../types/types';
import { Provider } from 'react-redux';
import { store } from '../store';
import offers from '../mocks/offers';

type AppScreenProps = {
  reviews: ReviewType[];
};
function App({ reviews }: AppScreenProps) {
  const favorites = offers.filter((o) => o.favorite);
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<MainScreen favorites={favorites} />}
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
              element={<Offer reviews={reviews} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
export default App;
