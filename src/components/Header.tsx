import MenuIcon from './MenuIcon.svg';
import BackButton from './BackButton.svg';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div>
      {location.pathname === '/' ? (
        <Link to="/menu">
          <img src={MenuIcon} alt="menu icon" className="menu-icon" />
        </Link>
      ) : (
        <button onClick={() => history.goBack()}>
          <img src={BackButton} alt="back button" className="menu-icon" />
        </button>
      )}
    </div>
  );
};

export default Header;
