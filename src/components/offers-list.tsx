import Card from './pages/Card';
import { OffersType } from '../types/types';
import { useAppSelector } from '../hooks';
import { getSorting } from '../utils';

interface OffersListProps {
  offers: OffersType[];
  listType: 'default' | 'near';
}

function OffersList({ offers, listType }: OffersListProps) {
  const selectedSortType = useAppSelector((state) => state.sortType);
  const sortedOffers = getSorting(offers, selectedSortType);
  const baseClass = 'places__list';
  const listClassMapping = {
    default: `${baseClass} cities__places-list tabs__content`,
    near: `${baseClass} near-places__list`
  };

  const additionalClass = listClassMapping[listType];
  return (
    <div className={`${additionalClass}`}>
      {sortedOffers.map((offer) => (
        <Card key={offer.id} offer={offer} cardType={listType}/>
      ))}
    </div>
  );
}

export default OffersList;
