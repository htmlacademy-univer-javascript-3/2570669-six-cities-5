export type OffersType = {
  id: number;
  premium: boolean;
  imageUrl: string;
  price: number;
  bookmarked: boolean;
  rating: number;
  title: string;
  type: string;
  favorite: boolean;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
};
