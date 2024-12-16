import { OffersType } from '../../types/types';
import Map from '../map';
import { Cities } from '../../city-list';
import { CitiesListMemo } from '../city-list';
import { useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import Header from '../header';
import { getOffers } from '../../store/offers-slice-selectors';
import CityPlaces from '../city-places';
import MainEmpty from './Main-empty';

type MainScreenProps = {
  favorites: OffersType[];
  city: string;
};

function MainScreen({ favorites, city }: MainScreenProps) {
  const offers = useAppSelector(getOffers);
  const currentCityOffers = useMemo(() => offers.filter((offer) => offer.city.name === city),
    [offers, city]);

  const currentCity = currentCityOffers.length > 0 ? currentCityOffers[0].city : offers[0].city;
  return (
    <div className="page page--gray page--main">
      <Header favorites={favorites}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesListMemo cities={Cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {currentCityOffers.length > 0 ?
              (<CityPlaces city={city} offers={currentCityOffers}/>) :
              (<MainEmpty city={city}/>)}
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currentCity} points={currentCityOffers} specialCaseId={undefined} isMainPage/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainScreen;
