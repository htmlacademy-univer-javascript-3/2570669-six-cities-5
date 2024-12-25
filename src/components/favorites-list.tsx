import { OffersType } from '../types/types';
import Card from './card';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { changeCity } from '../store/setting-slice';

type ListFavoritesProps = {
  favorites: OffersType[];
}
function ListFavorites({favorites}: ListFavoritesProps): JSX.Element {
  const favoritesMap = favorites.reduce(
    (acc: Record<string, OffersType[]>, place: OffersType) => {
      const city = place.city.name;
      acc[city] = [...(acc[city] ?? []), place];
      return acc;
    },
    {}
  );

  const dispatch = useAppDispatch();
  const handleCityClick = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favoritesMap).map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link to="/"className="locations__item-link" onClick={() => handleCityClick(city)}> <span>{city}</span>
                </Link>
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
  );
}
export default ListFavorites;
