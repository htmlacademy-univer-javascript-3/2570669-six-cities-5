import Card from './pages/Card';
import { OffersType } from '../types/offer';

interface OffersListProps {
  offers: OffersType[];
}

function OffersList({ offers }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default OffersList;
