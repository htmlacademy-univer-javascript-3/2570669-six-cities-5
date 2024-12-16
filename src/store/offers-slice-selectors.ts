import { State } from '../types/types.ts';
import { StateKey } from '../const.ts';

export const getOffers = (state: State) => state[StateKey.Offers].offers;
export const getOffersLoadingStatus = (state: State) => state[StateKey.Offers].isLoading;
export const getCurrentMarker = (state: State) => state[StateKey.Offers].activeMarker;
export const getFavorites = (state: State) => state[StateKey.Offers].favorites;
