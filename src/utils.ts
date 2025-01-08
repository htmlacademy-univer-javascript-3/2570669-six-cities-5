import { OffersType } from './types/types';

export function getRating(ratingValue: number): string {
  return `${ratingValue * 20}%`;
}

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const getSorting = (offers: OffersType[], sortType: SortType): OffersType[] => {
  const sortedOffers = [...offers];

  switch (sortType) {
    case SortType.Popular:
      break;
    case SortType.PriceLowToHigh:
      sortedOffers.sort((low, high) => low.price - high.price);
      break;
    case SortType.PriceHighToLow:
      sortedOffers.sort((low, high) => high.price - low.price);
      break;
    case SortType.TopRatedFirst:
      sortedOffers.sort((low, high) => high.rating - low.rating);
      break;
  }

  return sortedOffers;
};

export const updateOffer = (offers: OffersType[], updatedOffer: OffersType): OffersType[] => {
  const offerIndex = offers.findIndex((el) => el.id === updatedOffer.id);
  if (offerIndex !== -1) {
    return offers.map((offer, index) => index === offerIndex ? updatedOffer : offer);
  }
  return offers;
};
