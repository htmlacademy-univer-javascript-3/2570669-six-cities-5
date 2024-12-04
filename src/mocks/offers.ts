import { OffersType } from '../types/types';

export const offers: OffersType[] = [
  {
    id: '1',
    premium: true,
    imageUrl: 'img/apartment-01.jpg',
    price: 120,
    bookmarked: false,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    title: 'Beautiful & luxurious apartment at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    type: 'Apartment',
    favorite: true,
    owner: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max',
      isPro: true
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 5,
      },
    },
  },
  {
    id: '2',
    premium: false,
    imageUrl: 'img/room.jpg',
    price: 80,
    bookmarked: true,
    rating: 4,
    bedrooms: 1,
    maxAdults: 2,
    title: 'Wood and stone place',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    type: 'Room',
    favorite: true,
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 5,
      },
    },
  },
  {
    id: '3',
    premium: false,
    imageUrl: 'img/apartment-02.jpg',
    price: 132,
    bookmarked: true,
    rating: 4,
    bedrooms: 3,
    maxAdults: 4,
    title: 'Canal View Prinsengracht',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    type: 'Apartment',
    favorite: true,
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 5,
      },
    },
  },
  {
    id: '4',
    premium: true,
    imageUrl: 'img/apartment-03.jpg',
    price: 180,
    bookmarked: true,
    rating: 5,
    bedrooms: 3,
    maxAdults: 4,
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    type: 'Apartment',
    favorite: true,
    owner: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max',
      isPro: true
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 100,
      },
    },
  },
  {
    id: '5',
    imageUrl: 'img/apartment-02.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.35222,
        zoom: 10
      }
    },
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque. The building is green and from 18th century.',
    premium: false,
    type: 'apartment',
    rating: 4,
    bedrooms: 2,
    maxAdults: 1,
    price: 120,
    favorite: true,
    owner: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max',
      isPro: true
    },
    bookmarked: false
  },
  {
    id: '6',
    imageUrl: 'img/apartment-03.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.123456,
        zoom: 10
      }
    },
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque. The building is green and from 18th century.',
    premium: false,
    type: 'apartment',
    rating: 4,
    bedrooms: 2,
    maxAdults: 1,
    owner: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max',
      isPro: true
    },
    price: 120,
    favorite: true,
    bookmarked: false
  },
];

export default offers;
