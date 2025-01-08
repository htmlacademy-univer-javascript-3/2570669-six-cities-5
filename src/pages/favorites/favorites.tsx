import { OffersType } from '../../types/types';
import Header from '../../components/header/header';
import ListFavorites from '../../components/favorite-list/favorites-list';
import FavoritesEmpty from './favorites-empty';
import { Link } from 'react-router-dom';
import { FavoritesLogo } from '../../const';

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
        <Link to="/" className="footer__logo-link">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={FavoritesLogo.Width}
            height={FavoritesLogo.Height}
          />
        </Link>
      </footer>
    </div>
  );
}
export default Favorites;
