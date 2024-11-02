import { OffersType } from '../types/offer';
import Card from './pages/Card';

type FavoritesListProps = {
  favorites: OffersType[];
};

function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <div className="favorites__places">
      {favorites.map((favorite) => (
        <Card key={favorite.id} offer={favorite} />
      ))}
    </div>
  );
}

export default FavoritesList;
