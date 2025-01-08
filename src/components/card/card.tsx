import { OffersType } from '../../types/types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setCurrentMarker } from '../../store/offers-slice/offers-slice';
import { CardSize, Bookmark } from '../../const';
import { getRating } from '../../utils';

import FavoriteButton from '../favorite-button/favorite-button';

type CardProps = {
  offer: OffersType;
  cardType: 'default' | 'near';
};

function Card({ offer, cardType}: CardProps) {
  const { id, title, previewImage, type, rating, price, IsFavorite, IsPremium } = offer;
  const cardClass = cardType === 'default' ? 'cities__card place-card' : 'near-places__card place-card';
  const dispatch = useAppDispatch();

  return (
    <div onMouseOver={() => dispatch(setCurrentMarker({id}))}
      onMouseLeave={() => dispatch(setCurrentMarker(null))}
    >
      <article className={`${cardClass}`}>
        {IsPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={previewImage} width={CardSize.Size} height={CardSize.Size}
            alt="Place image"
          />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <FavoriteButton
              id={id}
              IsFavorite={IsFavorite}
              iconWidth={Bookmark.Width}
              iconHeight={Bookmark.Height}
              buttonClass="place-card__bookmark-button"
              activeClass="place-card__bookmark-button--active"
              iconClass="place-card__bookmark-icon"
              buttonText="In bookmarks"
            />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: getRating(rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${id}`} state={type} onClick={() => window.scrollTo(0, 0)}>
              {title}
            </Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </div>
  );
}

export default Card;

