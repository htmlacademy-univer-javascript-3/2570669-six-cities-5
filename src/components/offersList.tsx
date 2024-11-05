import Card from './pages/Card';
import { OffersType } from '../types/types';

interface OffersListProps {
  offers: OffersType[];
  listType: string;
}

function OffersList({ offers, listType }: OffersListProps) {
  return (
    <div className={`${listType === 'default' ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default OffersList;
