import './Switch.css';
import { useState } from 'react';
const Switch: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(state => !state);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={handleClick} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
