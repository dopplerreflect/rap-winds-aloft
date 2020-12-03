import MenuButton from './MenuButton';
import BackButton from './BackButton';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="container">
      <div>
        {location.pathname === '/' ? (
          <Link to="/menu">
            <MenuButton />
          </Link>
        ) : (
          <button onClick={() => history.goBack()} className="icon">
            <BackButton />
          </button>
        )}
      </div>
      <div className="title">
        {location.pathname === '/'
          ? 'Winds Aloft'
          : location.pathname
              .replace(/^\//, '')
              .replace(/[^]/, v => v.toUpperCase())}
      </div>
    </div>
  );
};

export default Header;
