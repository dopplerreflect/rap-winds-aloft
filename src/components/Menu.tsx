import './Menu.css';
import { useHistory } from 'react-router-dom';
import ForwardButton from './ForwardButton.svg';
const Settings: React.FC = () => {
  const history = useHistory();

  const navigateTo = (path: string): void => {
    history.push(path);
  };

  return (
    <ul className="Menu">
      <li onClick={() => navigateTo('/about')}>
        <div>About</div>
        <div>
          <img src={ForwardButton} alt="forward button" className="icon" />
        </div>
      </li>
    </ul>
  );
};

export default Settings;
