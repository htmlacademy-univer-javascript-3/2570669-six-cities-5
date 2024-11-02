import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from './pages/MainScreen';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import NotFound from './NotFound';
import AppRoute, { AuthorizationStatus } from '../const';
import PrivateRoute from './private-route';
import { OffersType } from '../types/types';

type AppScreenProps = {
  placesCount: number;
  offers: OffersType[];
  favorites: OffersType[];
}
function App({placesCount, offers, favorites}: AppScreenProps){
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path ={AppRoute.Root} element = {<MainScreen placesCount={placesCount} offers={offers}/>} />
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route
            path={AppRoute.Favorites}
            element = {
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <Favorites favorites={favorites}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export default App;
