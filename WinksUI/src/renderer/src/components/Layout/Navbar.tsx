import React from 'react';
import { useNavigate } from 'react-router-dom';

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



export default function Navbar({ onSelect }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    //onLogout();
    navigate('/'); // Navigate to Homepage
  };

  const handleQuickLinks = () => {
    navigate('/quick-links');
  };

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


      <div style={{ marginTop: '40px' }}>
          <button
            onClick={handleQuickLinks}
            style={{
              background: 'linear-gradient(135deg, #b8e1ff, #6a9eff)',
              color: '#003366',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '90%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              fontSize: '16px',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Quick Links
          </button>
        </div>


      <button
        onClick={handleLogout}
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