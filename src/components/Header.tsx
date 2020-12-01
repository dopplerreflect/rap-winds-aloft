import SettingsIcon from './Settings.svg';
import { Link } from 'react-router-dom';
const Header: React.FC = () => (
  <div>
    Winds Aloft Forecast
    <Link to="/settings">
      <img src={SettingsIcon} alt="settings icon" className="settings-icon" />
    </Link>
  </div>
);

export default Header;
