import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../not-found/not-found';
import AppRoute, {AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading/loading';
import HistoryRouter from '../history-router/history-router';
import { browserHistory } from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-slice/user-slice-selectors';
import { getOffersLoadingStatus } from '../../store/offers-slice/offers-slice-selectors';
import { getCity } from '../../store/app-settings/setting-selectors';
import { getFavorites } from '../../store/offers-slice/offers-slice-selectors';
import { OffersType } from '../../types/types';

function App() {
  const favorites: OffersType[] = useAppSelector(getFavorites);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loadingOffers = useAppSelector(getOffersLoadingStatus);
  const city = useAppSelector(getCity);

  if (authorizationStatus === AuthorizationStatus.Unknown || loadingOffers) {
    return <LoadingScreen/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen favorites={favorites} city={city}/>}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer favorites={favorites}/>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}
export default App;
