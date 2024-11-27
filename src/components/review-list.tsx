import Review from './review';
import { ReviewType } from '../types/types';

type ReviewListProps = {
    reviews: ReviewType[];
}

function ReviewList({reviews: reviewList}: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviewList.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
  );
}
export default ReviewList;
