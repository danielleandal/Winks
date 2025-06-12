import React, { useState } from 'react'
import './AuthPage.css'

export default function ForgotPasswordPage({
  onGoBackToLogin
}: {
  onGoBackToLogin: () => void
}): React.JSX.Element {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Sending password reset link to:', email)
    setMessage('If an account exists for that email, a reset link has been sent.')
  }

  return (
    <div className="auth-container">
      <div className="auth-button-container">
        <button className="auth-back-button" onClick={onGoBackToLogin}>
          &larr; Back
        </button>
      </div>

      <h2 className="auth-title">Forgot Your Password?</h2>

      <p className="auth-text-center" style={{ color: '#666', marginBottom: '20px' }}>
        Enter your email address below and we&#39;ll send you a link to reset your password.
      </p>

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

        <button type="submit" className="auth-button">
          Send Reset Link
        </button>
      </form>

      {message && (
        <p className="auth-text-center" style={{ color: 'green', marginTop: '15px' }}>
          {message}
        </p>
      )}
    </div>
  )
}
