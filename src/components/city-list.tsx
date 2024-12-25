import { useAppDispatch, useAppSelector } from '../hooks/index.ts';
import { changeCity } from '../store/setting-slice.ts';
import { memo } from 'react';
import { getCity } from '../store/setting-selectors.ts';
import { Link } from 'react-router-dom';


type CitiesListProps = {
  cities: { name: string; id: number }[];
};

type CityProps = {
  name: string;
  cityChangeName: (city: string) => void;
  isActive: boolean;
};

const City = ({name, cityChangeName, isActive}: CityProps): JSX.Element => (
  <li className="locations__item" onClick={() => cityChangeName(name)}>
    <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to="#">
      <span>{name}</span>
    </Link>
  </li>
);

function CitiesList({cities}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);
  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City
          key={city.id}
          name={city.name}
          cityChangeName={handleCityChange}
          isActive={city.name === currentCity}
        />
      ))}
    </ul>
  );
}
export const CitiesListMemo = memo(CitiesList);
