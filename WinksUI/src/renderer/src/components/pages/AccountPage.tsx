import React, { useState } from 'react';
import LoginPage from './Login';
import SignupPage from './Signup';
import ForgotPasswordPage from './ForgotPasswordPage';

export default function AccountPage(): React.JSX.Element {
  const [currentView, setCurrentView] = useState<'initial' | 'login' | 'signup' | 'forgotPassword'>('initial');

  const handleGoBack = () => setCurrentView('initial');
  const handleSwitchToForgotPassword = () => setCurrentView('forgotPassword');
  const handleGoBackToLogin = () => setCurrentView('login');

  if (currentView === 'login') {
    return (
      <LoginPage
        onSwitchToSignup={() => setCurrentView('signup')}
        onGoBack={handleGoBack}
        onSwitchToForgotPassword={handleSwitchToForgotPassword}
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <SignupPage
        onSwitchToLogin={() => setCurrentView('login')}
        onGoBack={handleGoBack}
      />
    );
  }

  if (currentView === 'forgotPassword') {
    return <ForgotPasswordPage onGoBackToLogin={handleGoBackToLogin} />;
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Account</h1>
      <p style={subtextStyle}>
        Don’t have an account?
        <br />
        That’s perfectly fine.
      </p>
      <p style={infoStyle}>
        Creating an account allows you to save your settings and sync them across multiple devices.
      </p>

      <div style={buttonGroupStyle}>
        <button style={signupBtnStyle} onClick={() => setCurrentView('signup')}>
          Sign up
        </button>
        <button style={loginBtnStyle} onClick={() => setCurrentView('login')}>
          Log in
        </button>
      </div>
    </div>
  );
}

//  Style Objects

const containerStyle: React.CSSProperties = {
  padding: '48px 24px',
  maxWidth: '90%',
  margin: '80px auto',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  fontFamily: 'Poppins, sans-serif',
};

const headingStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: '32px',
  marginBottom: '16px',
};

const subtextStyle: React.CSSProperties = {
  fontSize: '16px',
  color: '#555',
  marginBottom: '8px',
};

const infoStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#777',
  maxWidth: '360px',
  margin: '0 auto 40px',
  lineHeight: '1.6',
};

const buttonGroupStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const baseButtonStyle: React.CSSProperties = {
  padding: '12px 30px',
  border: 'none',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const signupBtnStyle: React.CSSProperties = {
  ...baseButtonStyle,
  background: 'rgb(110, 210, 237)',
  color: '#fff',
  boxShadow: '0 4px 12px rgba(0, 114, 255, 0.3)',
};

const loginBtnStyle: React.CSSProperties = {
  ...baseButtonStyle,
  background: '#e0e0e0',
  color: '#333',
};