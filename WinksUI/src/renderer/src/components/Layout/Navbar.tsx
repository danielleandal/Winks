import React from 'react';

type Props = {
  onSelect: (page: 'account' | 'settings') => void;
  onLogout: () => void;
};

const linkStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#333',
  cursor: 'pointer',
  fontSize: '16px',
  textAlign: 'left',
  padding: 0,
};

export default function Navbar({ onSelect, onLogout }: Props) {
  return (
    <nav
      style={{
        width: '240px',
        background: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px 16px',
        boxSizing: 'border-box',
        borderRight: '1px solid #ddd',
        height: '100vh',
      }}
    >
      <div>
        <h2 style={{ fontSize: '20px', marginBottom: '32px' }}>Winks</h2>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '16px' }}>
            <button onClick={() => onSelect('account')} style={linkStyle}>
              Account
            </button>
          </li>
          <li>
            <button onClick={() => onSelect('settings')} style={linkStyle}>
              Settings
            </button>
          </li>
        </ul>
      </div>

      <button
        onClick={onLogout}
        style={{
          marginTop: 'auto',
          backgroundColor: '#e53935',
          color: 'white',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </nav>
  );
}