import { OffersType } from './types/types';

export function getRating(ratingValue: number): string {
  return `${ratingValue * 20}%`;
}

export const getSorting = (offers: OffersType[], sortType: string): OffersType[] => {
  const sortedOffers = [...offers];

  switch (sortType) {
    case 'Popular':
      break;
    case 'Price: low to high':
      sortedOffers.sort((low, high) => low.price - high.price);
      break;
    case 'Price: high to low':
      sortedOffers.sort((low, high) => high.price - low.price);
      break;
    case 'Top rated first':
      sortedOffers.sort((low, high) => high.rating - low.rating);
      break;
    default:
      throw new Error(`Unknown sort type: ${sortType}`);
  }

  return sortedOffers;
};
