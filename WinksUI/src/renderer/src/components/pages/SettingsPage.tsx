import { useState } from 'react';

export default function SettingsPage() {
  const [leftSensitivity, setLeftSensitivity] = useState(0.5);
  const [rightSensitivity, setRightSensitivity] = useState(0.5);

  return (
    <div style={{ padding: '32px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontWeight: 'bold' }}>Settings</h1>

      <h3 style={{ marginTop: '32px' }}>Wink Detection</h3>

      <div style={{ marginBottom: '24px' }}>
        <label>Left Wink Sensitivity</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={leftSensitivity}
          onChange={(e) => setLeftSensitivity(parseFloat(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <label>Right Wink Sensitivity</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={rightSensitivity}
          onChange={(e) => setRightSensitivity(parseFloat(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <button
        style={{
          padding: '12px 32px',
          fontSize: '16px',
          backgroundColor: '#cff3ff',
          color: '#000',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        Calibrate
      </button>
    </div>
  );
}