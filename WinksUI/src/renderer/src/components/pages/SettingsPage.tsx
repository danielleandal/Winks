import { useState } from 'react';

export default function SettingsPage() {
  const [leftSensitivity, setLeftSensitivity] = useState(0.5);
  const [rightSensitivity, setRightSensitivity] = useState(0.5);

  const handleSave = () => {
    console.log('Saving wink sensitivity settings:', {
      left: leftSensitivity,
      right: rightSensitivity,
    });
    alert('Settings saved (connect to DB)');
  };

  return (
    <div
      style={{
        padding: '48px',
        maxWidth: '750px',
        margin: '60px auto',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <h1 style={{ fontWeight: '600', fontSize: '32px', marginBottom: '12px', textAlign: 'center' }}>
        Settings
      </h1>

      <p style={{ textAlign: 'center', color: '#777', marginBottom: '40px' }}>
        Fine-tune your blink sensitivity for a personalized experience.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>
          Left Wink Sensitivity: <span style={{ color: '#0070f3' }}>{leftSensitivity.toFixed(2)}</span>
        </label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={leftSensitivity}
          onChange={(e) => setLeftSensitivity(parseFloat(e.target.value))}
          style={{
            width: '100%',
            appearance: 'none',
            height: '8px',
            borderRadius: '4px',
            background: '#e0e0e0',
            outline: 'none',
            transition: 'background 0.3s ease',
          }}
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>
          Right Wink Sensitivity: <span style={{ color: '#0070f3' }}>{rightSensitivity.toFixed(2)}</span>
        </label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={rightSensitivity}
          onChange={(e) => setRightSensitivity(parseFloat(e.target.value))}
          style={{
            width: '100%',
            appearance: 'none',
            height: '8px',
            borderRadius: '4px',
            background: '#e0e0e0',
            outline: 'none',
            transition: 'background 0.3s ease',
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <button
          onClick={handleSave}
          style={{
            padding: '12px 32px',
            fontSize: '16px',
            backgroundColor: '#5c80ff',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3d5ce4')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#5c80ff')}
        >
          Calibrate
        </button>


      </div>
    </div>
  );
}