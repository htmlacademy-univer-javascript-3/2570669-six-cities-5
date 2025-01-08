import { Link } from 'react-router-dom';
import { LoginLogo } from '../../const';


function Logo(){
  return(
    <Link className="header__logo-link header__logo-link--active" to={'/'}>
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={LoginLogo.Width}
        height={LoginLogo.Height}
      />
    </Link>
  );
}

export default Logo;
