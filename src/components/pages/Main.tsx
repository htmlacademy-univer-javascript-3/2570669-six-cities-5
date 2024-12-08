import { OffersType } from '../../types/types';
import OffersList from '../offers-list';
import Map from '../map';
import { Cities } from '../../city-list';
import CitiesList from '../city-list';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import OfferCardsSorting from '../offers-sorting';
import Header from '../header';

type MainScreenProps = {
  favorites: OffersType[];
};

function MainScreen({ favorites }: MainScreenProps) {
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const [currentCityOffers, setCurrentCityOffers] = useState<OffersType[]>(offers);
  const currentCity = currentCityOffers.length > 0 ? currentCityOffers[0].city : offers[0].city;
  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);
  return (
    <div className="page page--gray page--main">
      <Header favorites={favorites}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={Cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${currentCityOffers.length} places to stay in ${city}`}</b>
              <OfferCardsSorting/>
              <OffersList offers={currentCityOffers} listType={'default'} />
            </section>
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
