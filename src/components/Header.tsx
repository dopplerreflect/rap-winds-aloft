import BuildInfo from '../Revision.json';
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
          <Link to="/menu" aria-label="Menu">
            <MenuButton />
          </Link>
        ) : (
          <button
            onClick={() => history.goBack()}
            className="icon"
            aria-label="Back"
          >
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
      <div>Build: {BuildInfo.revision}</div>
    </div>
  );
};

export default Header;
