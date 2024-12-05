import { Route, Routes } from 'react-router-dom';
import MainScreen from './pages/Main';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import NotFound from './Not-found';
import AppRoute, { AuthorizationStatus } from '../const';
import PrivateRoute from './private-route';
import { OffersType, ReviewType } from '../types/types';
import { useAppSelector } from '../hooks';
import LoadingScreen from './pages/loading';
import HistoryRouter from './history-router';
import { browserHistory } from '../browser-history';

type AppScreenProps = {
  reviews: ReviewType[];
};

function App({ reviews }: AppScreenProps) {
  const offers: OffersType[] = useAppSelector((state) => state.offers);
  const filterfavorites = offers.filter((o) => o.favorite);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const loadingOffers = useAppSelector((state) => state.isOffersDataLoading);

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
          element={<Offer reviews={reviews} favorites={filterfavorites}/>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}
export default App;
