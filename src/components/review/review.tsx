import { ReviewType } from '../../types/types';
import { getRating } from '../../utils';
import { Avatar } from '../../const';

type ReviewProps = {
  review: ReviewType;
};

function Review({ review }: ReviewProps) {
  const {date, user, rating, comment } = review;
  const width: string = getRating(rating);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={Avatar.Size}
            height={Avatar.Size}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: width}} />
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={new Date(date).toISOString().split('T')[0]}>{new Date(date).toLocaleDateString()}
        </time>
      </div>
    </li>
  );
}
export default Review;
