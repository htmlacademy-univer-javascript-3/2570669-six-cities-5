import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './pages/Main';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import NotFound from './Not-found';
import AppRoute, { AuthorizationStatus } from '../const';
import PrivateRoute from './private-route';
import { OffersType, ReviewType } from '../types/types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { listFilling } from '../store/action';

type AppScreenProps = {
  reviews: ReviewType[];
};

function App({ reviews }: AppScreenProps) {
  const offers: OffersType[] = useAppSelector((state) => state.offers);
  const filterfavorites = offers.filter((o) => o.favorite);
  const dispatch = useAppDispatch();
  dispatch(listFilling());
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen favorites={filterfavorites} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
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
    </BrowserRouter>
  );
}
export default App;
