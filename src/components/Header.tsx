import SettingsIcon from './Settings.svg';
const Header: React.FC = () => (
  <div>
    Winds Aloft Forecast
    <img src={SettingsIcon} alt="settings icon" className="settings-icon" />
  </div>
);

export default Header;
