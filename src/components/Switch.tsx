import './Switch.css';
import { useSettings } from './SettingsProvider';

const Switch: React.FC = () => {
  const { state, dispatch } = useSettings();

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    dispatch({ type: 'toggle-displayMetric' });
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={state.displayMetric}
        onChange={handleClick}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
