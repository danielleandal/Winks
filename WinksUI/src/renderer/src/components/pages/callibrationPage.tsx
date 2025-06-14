import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function CalibrationPage() {
  const [yaw, setYaw] = useState(45);
  const [pitch, setPitch] = useState(45);
  const [deadZone, setDeadZone] = useState(6);
  const [tiltAngle, setTiltAngle] = useState(20);
  const navigate = useNavigate();

  const handleSave = () => {
    const settings = { yaw, pitch, deadZone, tiltAngle };
    console.log('Saving settings:', settings);
    alert('Need to connect to DB');
  };

  const handleProceed = () => {
    navigate('/dashboard');
  };

  return (
    <div className="home-container">
      <h1 className="home-heading"> Calibration Settings</h1>
      <p className="home-subtext">Fine-tune your head tracking for a smooth and personalized experience.</p>

      <div style={{ width: '100%', maxWidth: '600px', background: '#ffffffcc', padding: '30px', borderRadius: '16px', boxShadow: '0 6px 18px rgba(0,0,0,0.1)', marginTop: '20px' }}>
        {[
          { label: 'Sensitivity Yaw (°)', value: yaw, setter: setYaw, min: 10, max: 90 },
          { label: 'Sensitivity Pitch (°)', value: pitch, setter: setPitch, min: 10, max: 90 },
          { label: 'Dead Zone (°)', value: deadZone, setter: setDeadZone, min: 0, max: 20 },
          { label: 'Max Tilt Angle (°)', value: tiltAngle, setter: setTiltAngle, min: 10, max: 45 },
        ].map((setting, index) => (
          <div key={index} style={{ marginBottom: '24px' }}>
            <label style={{ fontWeight: '600', display: 'block', marginBottom: '8px' }}>
              {setting.label}: <span style={{ color: '#005bb5' }}>{setting.value}°</span>
            </label>
            <input
              type="range"
              min={setting.min}
              max={setting.max}
              value={setting.value}
              onChange={(e) => setting.setter(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#5c80ff',
                cursor: 'pointer',
              }}
            />
          </div>
        ))}

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '30px' }}>
  <button
    onClick={handleSave}
    style={{
      padding: '12px 32px',
      background: '#0070f3',
      color: 'white',
      fontWeight: '600',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      width: '200px',
    }}
    onMouseOver={(e) => {
      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 18px rgba(0, 112, 243, 0.4)';
    }}
    onMouseOut={(e) => {
      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
      (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
    }}
  >
    Save Settings
  </button>

  <button
    onClick={handleProceed}
    style={{
      padding: '12px 32px',
      background: '#5c80ff',
      color: 'white',
      fontWeight: '600',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      width: '200px',
    }}
    onMouseOver={(e) => {
      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 18px rgba(8, 72, 131, 0.4)';
    }}
    onMouseOut={(e) => {
      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
      (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
    }}
  >
    Proceed
  </button>
</div>
      </div>

      <p className="signup-prompt" style={{ marginTop: '24px' }}>
        Your preferences will enhance control accuracy and comfort.
      </p>
    </div>
  );
}