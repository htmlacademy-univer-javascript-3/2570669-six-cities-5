import Review from './review';
import { ReviewType } from '../types/types';

type ReviewListProps = {
    reviews: ReviewType[];
}

function ReviewList({reviews}: ReviewListProps) {
  const sortedReviews = reviews.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);
  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
  );
}
export default ReviewList;
