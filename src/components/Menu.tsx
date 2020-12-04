import './Menu.css';
import { useHistory } from 'react-router-dom';
import ForwardButton from './ForwardButton';
const Settings: React.FC = () => {
  const history = useHistory();

  const clearCache = () => {
    sessionStorage.removeItem('cache');
    history.goBack();
  };

  return (
    <ul className="Menu">
      <li onClick={() => history.push('/about')} aria-label="About">
        <div>About</div>
        <div>
          <button className="icon">
            <ForwardButton />
          </button>
        </div>
      </li>

      <li onClick={clearCache}>
        <div>Clear Cache</div>
        <button className="icon" aria-label="Clear Cache">
          <ForwardButton />
        </button>
      </li>
    </ul>
  );
};

export default Settings;
