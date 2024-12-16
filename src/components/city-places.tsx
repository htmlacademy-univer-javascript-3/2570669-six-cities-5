import OfferCardsSorting from './offers-sorting.tsx';
import { OffersListMemo } from './offers-list.tsx';
import { OffersType } from '../types/types.ts';

type CityPlacesProps = {
  city: string;
  offers: OffersType[];
}
function CityPlaces({city, offers}: CityPlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${city}`}</b>
      <OfferCardsSorting/>
      <OffersListMemo offers={offers} listType={'default'} />
    </section>
  );
}
export default CityPlaces;
