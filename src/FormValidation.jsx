import React, { useState } from 'react'
import './form.css'

export default function FormValidation() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(value)
  }

  const emailIsValid = validateEmail(email)
  const passwordIsValid = password.length >= 6 // simple rule: min 6 chars
  const isFormValid = emailIsValid && passwordIsValid

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailTouched(true)
    setPasswordTouched(true)

    if (!isFormValid) return

    // For demo: just alert; replace with real submission logic.
    alert('Form submitted successfully!\n' + JSON.stringify({ email }))
  }

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit} noValidate>
        <h1>Login</h1>

        <label className="label">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            placeholder="you@example.com"
          />
        </label>
        {emailTouched && !emailIsValid && (
          <p className="error">Please enter a valid email address.</p>
        )}

        <label className="label">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            placeholder="At least 6 characters"
          />
        </label>
        {passwordTouched && !passwordIsValid && (
          <p className="error">Password must be at least 6 characters.</p>
        )}

        <button type="submit" disabled={!isFormValid} className="btn">
          Submit
        </button>
      </form>
    </div>
  )
}
