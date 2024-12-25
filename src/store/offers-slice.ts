import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersType, OffersState, OfferData, ReviewType } from '../types/types.ts';
import { StateKey } from '../const.ts';
import { updateOffer } from '../utils.ts';

const initialState: OffersState = {
  currentOffer: {
    selectedOffer: null,
    nearbyOffers: [],
    reviews: [],
  },
  offers: [],
  activeMarker: null,
  isLoading: false,
  favorites: []
};

export const offersSlice = createSlice({
  name: StateKey.Offers,
  initialState,
  reducers: {
    loadOffers(state, action: PayloadAction<OffersType[]>) {
      state.offers = action.payload;
      state.favorites = action.payload.filter((it) => it.favorite);
    },
    updateOffers: (state, action: PayloadAction<OffersType>) => {
      state.offers = updateOffer(state.offers, action.payload);
      state.favorites = state.offers.filter((it) => it.favorite);
    },
    setOffersDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    loadOfferDetails(state, action: PayloadAction<OfferData>) {
      const { selectedOffer, nearbyOffers, reviews } = action.payload;
      state.currentOffer.selectedOffer = selectedOffer;
      state.currentOffer.nearbyOffers = nearbyOffers;
      state.currentOffer.reviews = reviews;
      state.activeMarker = { id: selectedOffer.id };
    },
    sendReview(state, action: PayloadAction<ReviewType>) {
      state.currentOffer.reviews.push(action.payload);
    },
    setCurrentMarker(state, action: PayloadAction<{ id: string } | null>) {
      state.activeMarker = action.payload;
    },
    loadFavorites(state, action: PayloadAction<OffersType[]>){
      state.favorites = action.payload;
    },
  },
});
export const {loadOffers, setOffersDataLoadingStatus, loadOfferDetails,
  sendReview, setCurrentMarker, updateOffers, loadFavorites} = offersSlice.actions;
