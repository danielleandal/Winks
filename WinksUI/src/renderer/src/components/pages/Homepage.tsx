import { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import './HomePage.css';
import logo from '../../images/logo2.png';

export default function HomePage() {
  const [entered, setEntered] = useState(false);

  if (entered) {
    return <MainLayout onLogout={() => setEntered(false)} />;
  }

  return (
    <div className="home-container">
      <img src={logo} alt="Winks logo" className="home-logo" />

      <div className="home-heading-with-tooltip">
        <h1 className="home-heading">Welcome!</h1>
        <div className="tooltip-container">
          <span className="tooltip-icon">?</span>
          <div className="tooltip-text">
            Winks is a hands-free, eye-controlled interface designed to enhance accessibility and interaction.
          </div>
        </div>
      </div>

      <p className="home-subtext">Let's begin your journey!</p>

      <button className="home-button" onClick={() => {
        console.log('Dive In clicked');
        setEntered(true);
        }}>
        Dive in
      </button>



    </div>
  );
}