import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-slice-selectors';
import { APIRoute, AuthorizationStatus, FavoriteStatus } from '../const';
import { changeFavoriteStatusAction } from '../store/api-actions';
import { useEffect, useState } from 'react';

type AddToFavouritesButtonProps = {
  isFavorite: boolean;
  id: string;
  iconWidth: number;
  iconHeight: number;
  buttonText: string;
  buttonClass: string;
  activeClass: string;
  iconClass: string;
};
function AddToFavouritesButton(props: AddToFavouritesButtonProps): JSX.Element {
  const {
    isFavorite: initialFavoriteStatus,
    id,
    buttonText,
    iconHeight,
    iconWidth,
    buttonClass,
    activeClass,
    iconClass,
  } = props;
  const [isFavorite, setIsFavorite] = useState(initialFavoriteStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  useEffect(() => {
    setIsFavorite(initialFavoriteStatus);
  }, [initialFavoriteStatus, id]);
  const handleBookmarkClick = async () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(APIRoute.Login);
      return;
    }
    setIsSubmitting(true);
    try {
      await dispatch(
        changeFavoriteStatusAction({
          offerId: id,
          status: isFavorite ? FavoriteStatus.Remove : FavoriteStatus.Add,
        })
      ).unwrap();
      setIsFavorite(!isFavorite);
    } finally {
      setIsSubmitting(false);
    }
  };
  const onBookmarkClick = () => {
    handleBookmarkClick();
  };
  return (
    <button
      className={`bookmark-button button ${buttonClass} ${isFavorite ? activeClass : ''}`}
      type="button"
      disabled={isSubmitting}
      onClick={onBookmarkClick}
    >
      <svg
        className={`bookmark-icon ${iconClass}`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{buttonText}</span>
    </button>
  );
}
export default AddToFavouritesButton;
