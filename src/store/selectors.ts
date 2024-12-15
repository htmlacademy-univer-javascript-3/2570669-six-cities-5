import { createSelector } from 'reselect';
import store from './index.ts';
import { StateKey } from '../const.ts';

type State = ReturnType<typeof store.getState>;

const getCurrentOffer = (state: State) => state[StateKey.Offers].currentOffer;

const getOfferInfo = createSelector(
  [getCurrentOffer],
  (currentOffer) => currentOffer.selectedOffer
);

const getNearestOffers = createSelector(
  [getCurrentOffer],
  (currentOffer) => currentOffer.nearbyOffers
);

const getReviews = createSelector(
  [getCurrentOffer],
  (currentOffer) => currentOffer.reviews
);

export const getCurrentOfferData = createSelector(
  [getOfferInfo, getNearestOffers, getReviews],
  (selectedOffer, nearbyOffers, reviews) => ({
    selectedOffer,
    nearbyOffers,
    reviews,
  })
);
