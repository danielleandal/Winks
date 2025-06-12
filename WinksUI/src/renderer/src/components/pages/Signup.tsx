import React, { useState } from 'react'
import './AuthPage.css'

export default function SignupPage({
  onSwitchToLogin,
  onGoBack
}: {
  onSwitchToLogin: () => void
  onGoBack: () => void
}): React.JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Signup form submitted:', { email, password })
    // todo add signup logic
  }

  return (
    <div className="auth-container">
      <div className="auth-button-container">
        <button className="auth-back-button" onClick={onGoBack}>
          &larr; Back
        </button>
      </div>

      <h2 className="auth-title">Sign up for a new account</h2>

      <form onSubmit={handleSubmit}>
        <div className="auth-form-group">
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />
        </div>

        <div className="auth-form-group">
          <input
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
        </div>

        <button type="submit" className="auth-button">
          Sign Up
        </button>
      </form>

      <p className="auth-text-center">
        Have an account?{' '}
        <a href="#" onClick={onSwitchToLogin} className="auth-link">
          Sign in here
        </a>
      </p>
    </div>
  )
}
