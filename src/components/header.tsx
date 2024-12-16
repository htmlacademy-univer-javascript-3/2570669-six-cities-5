import { Link } from 'react-router-dom';
import { OffersType } from '../types/types.ts';
import { useAppDispatch, useAppSelector } from '../hooks/index.ts';
import { AuthorizationStatus } from '../const.ts';
import { logout } from '../store/api-actions.ts';
import Logo from './Logo.tsx';
import { getAuthorizationStatus, getEmail } from '../store/user-slice-selectors.ts';


type HeaderProps = {
  favorites: OffersType[];
}

function Header({favorites}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userEmail = useAppSelector(getEmail);

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <div className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.Auth ? (
                    <Link to="/favorites">
                      <span className="header__user-name user__name">{userEmail}</span>
                      <span className="header__favorite-count">{favorites.length}</span>
                    </Link>
                  ) : (
                    <Link to="/login" className="header__nav-link">Login</Link>
                  )}
                </div>
              </li>
              {authorizationStatus === AuthorizationStatus.Auth && (
                <li className="header__nav-item">
                  <a href="#" className="header__nav-link" onClick={handleSignOut}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
