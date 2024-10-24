import { OffersType } from '../types/offer';

const offers: OffersType[] = [
  {
    id: 1,
    premium: true,
    imageUrl: 'img/apartment-01.jpg',
    price: 120,
    bookmarked: false,
    rating: 4.8,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    favorite: true,
  },
  {
    id: 2,
    premium: false,
    imageUrl: 'img/room.jpg',
    price: 80,
    bookmarked: true,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Room',
    favorite: true,
  },
  {
    id: 3,
    premium: false,
    imageUrl: 'img/apartment-02.jpg',
    price: 132,
    bookmarked: true,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    favorite: true,
  },
  {
    id: 4,
    premium: true,
    imageUrl: 'img/apartment-03.jpg',
    price: 180,
    bookmarked: true,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    favorite: true,
  },
];

export default offers;
