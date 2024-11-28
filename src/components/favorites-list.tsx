import { OffersType } from '../types/types';
import Card from './pages/Card';

type FavoritesListProps = {
  favorites: OffersType[];
};

function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <div className="favorites__places">
      {favorites.map((favorite) => (
        <Card key={favorite.id} offer={favorite} cardType={'default'} setActiveOfferId={function (): void {
          throw new Error('Function not implemented.');
        } }
        />
      ))}
    </div>
  );
}

export default FavoritesList;
