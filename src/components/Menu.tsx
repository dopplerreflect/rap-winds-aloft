import './Menu.css';
import { useHistory } from 'react-router-dom';
import ForwardButton from './ForwardButton';
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
          <button className="icon">
            <ForwardButton />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default Settings;
