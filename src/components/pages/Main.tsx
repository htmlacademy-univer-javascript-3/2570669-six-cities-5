import Logo from '../Logo';
import { Helmet } from 'react-helmet-async';
import { OffersType } from '../../types/types';
import OffersList from '../offers-list';
import { Link } from 'react-router-dom';
import Map from '../map';
import { Cities } from '../../city-list';
import CitiesList from '../city-list';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';

type MainScreenProps = {
  placesCount: number;
  favorites: OffersType[];
};

function MainScreen({ placesCount, favorites }: MainScreenProps) {
  const [activeOfferId, setActiveOfferId] = useState(0);
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const [currentCityOffers, setCurrentCityOffers] = useState<OffersType[]>(offers);
  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Городов</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                to="/"
                className="header__logo-link header__logo-link--active"
              >
                <Logo />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">{favorites.length}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
              <b className="places__found">{`${placesCount} places to stay in ${city.name}`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OffersList offers={currentCityOffers} listType={'default'} setActiveOfferId={setActiveOfferId}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} points={currentCityOffers} activeOfferId={activeOfferId} isMainPage/>
              </section>
            </div>
            <div id="App"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainScreen;