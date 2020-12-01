import { Link } from 'react-router-dom';

const Settings: React.FC = () => {
  return (
    <div className="Menu">
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Settings;
