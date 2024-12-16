import { useAppSelector } from '../hooks';
import { getError } from '../store/setting-selectors';

const ErrorMessage: React.FC = () => {
  const error = useAppSelector(getError);
  if (!error) {
    return null;
  }
  return <div className='error-message'>{error}</div>;
};
export default ErrorMessage;
