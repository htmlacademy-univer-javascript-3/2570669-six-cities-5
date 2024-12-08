import { OffersType } from '../../types/types';
import Card from '../Card';
import Header from '../header';

type FavoritesProps = {
  favorites: OffersType[];
};

function Favorites({favorites}: FavoritesProps){
  const favoritesMap = favorites.reduce((acc, offer) => {
    const { city: { name: cityName } } = offer;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {} as Record<string, OffersType[]>);
  return (
    <div className="page">
      <Header favorites={favorites}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoritesMap).map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoritesMap[city].map((place) => (
                      <Card key={place.id} offer={place} cardType={'default'}/>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>);
}
export default Favorites;
