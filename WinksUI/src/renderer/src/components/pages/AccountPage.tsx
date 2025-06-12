import React, { useState } from 'react'
import LoginPage from './Login'
import SignupPage from './Signup'
import ForgotPasswordPage from './ForgotPasswordPage'

export default function AccountPage(): React.JSX.Element {
  const [currentView, setCurrentView] = useState<'initial' | 'login' | 'signup' | 'forgotPassword'>('initial')

  const handleGoBack = (): void => {
    setCurrentView('initial')
  }

  const handleSwitchToForgotPassword = (): void => {
    setCurrentView('forgotPassword')
  }

  const handleGoBackToLogin = (): void => {
    setCurrentView('login')
  }

  if (currentView === 'login') {
    return (
      <LoginPage
        onSwitchToSignup={() => setCurrentView('signup')}
        onGoBack={handleGoBack}
        onSwitchToForgotPassword={handleSwitchToForgotPassword}
      />
    )
  }

  if (currentView === 'signup') {
    return <SignupPage onSwitchToLogin={() => setCurrentView('login')} onGoBack={handleGoBack} />
  }

  if (currentView === 'forgotPassword') {
    return <ForgotPasswordPage onGoBackToLogin={handleGoBackToLogin} />
  }

  return (
    <div style={{ padding: '32px', textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold' }}>Account</h1>
      <p style={{ marginTop: '24px' }}>
        Don’t have an account?
        <br />
        That’s fine.
      </p>
      <p style={{ maxWidth: '400px', margin: '16px auto' }}>
        If you would like to create one, you can save your settings and use them on other devices as well.
      </p>
      <div style={{ marginTop: '24px' }}>
        <button style={btnStyle} onClick={() => setCurrentView('signup')}>
          Signup
        </button>
        <button style={{ ...btnStyle, marginLeft: '16px' }} onClick={() => setCurrentView('login')}>
          Login
        </button>
      </div>
    </div>
  )
}

const btnStyle = {
  backgroundColor: '#4FC3F7',
  color: 'black',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer'
}
