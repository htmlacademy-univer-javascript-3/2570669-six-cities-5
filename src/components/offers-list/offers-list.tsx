import { OffersType } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { getSorting, SortType } from '../../utils';
import { memo } from 'react';
import { getSortType } from '../../store/app-settings/setting-selectors';
import Card from '../card/card';

interface OffersListProps {
  offers: OffersType[];
  listType: 'default' | 'near';
}

function OffersList({ offers, listType }: OffersListProps) {
  const selectedSortType = useAppSelector(getSortType);

  if (!(Object.values(SortType) as string[]).includes(selectedSortType)) {
    throw new Error('Invalid sort type');
  }

  const sortedOffers = getSorting(offers, selectedSortType as SortType);

  const baseClass = 'places__list';
  const listClassMapping = {
    default: `${baseClass} cities__places-list tabs__content`,
    near: `${baseClass} near-places__list`,
  };

  const additionalClass = listClassMapping[listType];
  return (
    <div className={additionalClass}>
      {sortedOffers.map((offer) => (
        <Card key={offer.id} offer={offer} cardType={listType} />
      ))}
    </div>
  );
}

export const OffersListMemo = memo(OffersList);
