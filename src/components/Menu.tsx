import './Menu.css';
import { useHistory } from 'react-router-dom';
import { useSettings } from './SettingsProvider';
import ForwardButton from './ForwardButton';
import Switch from './Switch';
const Settings: React.FC = () => {
  const history = useHistory();

  const clearCache = () => {
    sessionStorage.removeItem('cache');
    history.goBack();
  };

  const { state, dispatch } = useSettings();

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    dispatch({ type: 'toggle-displayMetric' });
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

      <li onClick={handleClick}>
        <div>Display in Metric</div>
        <div>
          <Switch displayMetric={state.displayMetric} />
        </div>
      </li>
    </ul>
  );
};

export default Settings;
