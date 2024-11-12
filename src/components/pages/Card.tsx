import { OffersType } from '../../types/types';
import { Link } from 'react-router-dom';

type CardProps = {
  offer: OffersType;
  cardType: 'default' | 'near';
  setActiveOfferId: (id: number) => void;
};

function Card({ offer, cardType, setActiveOfferId}: CardProps) {
  const { id, title, imageUrl, type, rating, price, favorite, premium } = offer;
  const cardClass = cardType === 'default' ? 'cities__card place-card' : 'near-places__card place-card';
  const handleMouseEnter = () => {
    if (setActiveOfferId) {
      setActiveOfferId(id);
    }
  };
  const handleMouseLeave = () => {
    if (setActiveOfferId) {
      setActiveOfferId(0);
    }
  };
  return (
    <article className={`${cardClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              {favorite && <use xlinkHref="#icon-bookmark"></use>}
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} state={offer}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;

