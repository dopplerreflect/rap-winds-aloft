import './Menu.css';
import { useHistory } from 'react-router-dom';
import { useSettings } from './SettingsProvider';
import NavButton from './NavButton';
import Switch from './Switch';
const Settings: React.FC = () => {
  const history = useHistory();
  const { dispatch } = useSettings();
  const clearCache = () => {
    sessionStorage.removeItem('cache');
    history.goBack();
  };

  return (
    <ul className='Menu'>
      <li onClick={() => history.push('/about')} aria-label='About'>
        <div>About</div>
        <div>
          <button className='icon'>
            <NavButton direction='right' />
          </button>
        </div>
      </li>

      <li onClick={clearCache}>
        <div>Clear Cache</div>
        <div>
          <button className='icon' aria-label='Clear Cache'>
            <NavButton direction='right' />
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

      <li onClick={() => history.push('/debug')} aria-label='Debug'>
        <div>Debug</div>
        <div>
          <button className='icon'>
            <NavButton direction='right' />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default Settings;
