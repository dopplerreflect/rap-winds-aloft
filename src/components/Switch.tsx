import './Switch.css';
import { Settings } from '../types';

const Switch = ({ displayMetric }: Settings) => {
  return (
    <label className="switch" title="displayMetricSwitch">
      <input data-testid="input" type="checkbox" checked={displayMetric} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
