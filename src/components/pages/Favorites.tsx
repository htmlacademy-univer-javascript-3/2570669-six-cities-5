import { OffersType } from '../../types/types';
import Header from '../header';
import ListFavorites from '../favorites-list';
import FavoritesEmpty from './Favorites-empty';

type FavoritesProps = {
  favorites: OffersType[];
};

function Favorites({favorites}: FavoritesProps){
  return (
    <div className="page">
      <Header favorites={favorites}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favorites.length > 0 ?
            (<ListFavorites favorites={favorites}/>) :
            (<FavoritesEmpty/>)}
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
