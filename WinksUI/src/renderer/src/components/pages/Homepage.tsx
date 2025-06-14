import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../../images/logo2.png';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src={logo} alt="Winks logo" className="home-logo animated-logo" />

      <div className="home-heading-with-tooltip">
        <h1 className="home-heading">Welcome to <span className="highlight">Winks</span>!</h1>
        <div className="tooltip-container">
          <span className="tooltip-icon">?</span>
          <div className="tooltip-text">
            Winks is a hands-free, eye-controlled interface designed to enhance accessibility and interaction.
          </div>
        </div>
      </div>

      <p className="home-subtext">Start your journey with a blink.</p>

      <button
        className="home-button pulse"
        onClick={() => navigate('/calibration')}
      >
        Dive In 
      </button>

    </div>
  );
}