import { Route, Routes } from 'react-router-dom';
import MainScreen from './pages/Main';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import NotFound from './Not-found';
import AppRoute, { AuthorizationStatus } from '../const';
import PrivateRoute from './private-route';
import { OffersType} from '../types/types';
import { useAppSelector } from '../hooks';
import LoadingScreen from './pages/loading';
import HistoryRouter from './history-router';
import { browserHistory } from '../browser-history';
import { getOffers } from '../store/offers-slice-selectors';
import { getAuthorizationStatus } from '../store/user-slice-selectors';
import { getOffersLoadingStatus } from '../store/offers-slice-selectors';

function App() {
  const offers: OffersType[] = useAppSelector(getOffers);
  const filterfavorites = offers.filter((o) => o.favorite);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loadingOffers = useAppSelector(getOffersLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || loadingOffers) {
    return <LoadingScreen/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen favorites={filterfavorites} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites favorites={filterfavorites} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer favorites={filterfavorites}/>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}
export default App;
