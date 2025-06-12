import React from 'react'
import './AuthPage.css'

export default function LoginPage({
  onSwitchToSignup,
  onGoBack,
  onSwitchToForgotPassword
}: {
  onSwitchToSignup: () => void
  onGoBack: () => void
  onSwitchToForgotPassword: () => void
}): React.JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Login form submitted')
    // todo add login logic
  }

  return (
    <div className="auth-container">
      <div className="auth-button-container">
        <button className="auth-back-button" onClick={onGoBack}>
          &larr; Back
        </button>
      </div>

      <h2 className="auth-title">Sign in to your account</h2>

      <form onSubmit={handleSubmit}>
        <div className="auth-form-group">
          <input type="email" placeholder="Enter your email" required className="auth-input" />
        </div>

        <div className="auth-form-group">
          <input type="password" placeholder="Enter password" required className="auth-input" />
        </div>

        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <a href="#" onClick={onSwitchToForgotPassword} className="auth-link">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>

      <p className="auth-text-center">
        Don&#39;t have an account?{' '}
        <a href="#" onClick={onSwitchToSignup} className="auth-link">
          Sign Up
        </a>
      </p>
    </div>
  )
}
