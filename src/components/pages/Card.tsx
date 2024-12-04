import { OffersType } from '../../types/types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { currentMarker } from '../../store/action';
import { CARD_WIDTH, CARD_HEIGHT, BOOKMARK_ICON_HEIGHT, BOOKMARK_ICON_WIDTH } from '../../const';
import { getRating } from '../../utils';

type CardProps = {
  offer: OffersType;
  cardType: 'default' | 'near';
};

function Card({ offer, cardType}: CardProps) {
  const { id, title, imageUrl, type, rating, price, favorite, premium } = offer;
  const cardClass = cardType === 'default' ? 'cities__card place-card' : 'near-places__card place-card';
  const dispatch = useAppDispatch();
  return (
    <Link to={`/offer/${id}`} state={offer}>
      <article className={`${cardClass}`} onMouseEnter={() => dispatch(currentMarker({id}))} onMouseLeave={() => dispatch(currentMarker(null))} >
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
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
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
              <svg className="place-card__bookmark-icon" width={BOOKMARK_ICON_WIDTH} height={BOOKMARK_ICON_HEIGHT}>
                {favorite && <use xlinkHref="#icon-bookmark"></use>}
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: getRating(rating)}}></span>
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
    </Link>
  );
}

export default Card;

