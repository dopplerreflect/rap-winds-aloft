import './Menu.css';
import { useHistory } from 'react-router-dom';
import { useSettings } from './SettingsProvider';
import ForwardButton from './ForwardButton';
import Switch from './Switch';
const Settings: React.FC = () => {
  const history = useHistory();
  const { dispatch } = useSettings();
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
        <div>
          <button className="icon" aria-label="Clear Cache">
            <ForwardButton />
          </button>
        </div>
      </li>

      <li
        onClick={() => {
          dispatch({ type: 'toggle-displayMetric' });
        }}
      >
        <div>Display in Metric</div>
        <div>
          <Switch />
        </div>
      </li>
    </ul>
  );
};

export default Settings;
