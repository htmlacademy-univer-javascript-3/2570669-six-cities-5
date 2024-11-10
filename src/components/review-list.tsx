import Review from './review';
import { ReviewType } from '../types/types';

type ReviewListProps = {
    rewiews: ReviewType[];
}

function ReviewList({rewiews: reviewList}: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviewList.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
  );
}
export default ReviewList;
