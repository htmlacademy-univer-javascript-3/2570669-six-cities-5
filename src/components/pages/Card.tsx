import React from 'react';

interface CardProps {
  premium: boolean;
  imageUrl: string;
  price: string;
  bookmarked: boolean;
  rating: number;
  title: string;
  type: string;
}

const Card: React.FC<CardProps> = ({ premium, imageUrl, price, bookmarked, rating, title, type }) => (
  <article className="cities__card place-card">
    {premium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={imageUrl}
          width={260}
          height={200}
          alt="Place image"
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{price}</b>
          <span className="place-card__price-text">/night</span>
        </div>
        <button
          className={`place-card__bookmark-button button${bookmarked ? ' place-card__bookmark-button--active' : ''}`}
          type="button"
        >
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">{bookmarked ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${rating}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
);


export default Card;
