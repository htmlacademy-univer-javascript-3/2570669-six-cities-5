import Card from './pages/Card';
import { OffersType } from '../types/types';

interface OffersListProps {
  offers: OffersType[];
  listType: 'default' | 'near';
  setActiveOfferId(id:number): void;
}

function OffersList({ offers, listType, setActiveOfferId }: OffersListProps) {
  const baseClass = 'places__list';
  const additionalClass = listType === 'default' ? 'cities__places-list tabs__content' : 'near-places__list';
  return (
    <div className={`${additionalClass} ${baseClass}`}>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} cardType={listType} setActiveOfferId={setActiveOfferId}/>
      ))}
    </div>
  );
}

export default OffersList;
