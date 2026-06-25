import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

const DEFAULT_USERS = {
  'admin@example.com': {
    password: 'password123',
    name: 'Admin',
    role: 'Admin',
  },
}

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS)
  const [view, setView] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState('')

  const handleLogin = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase()
    const user = users[normalizedEmail]

    if (user && user.password === password) {
      setIsLoggedIn(true)
      setCurrentUser({ email: normalizedEmail, ...user })
      setError('')
      return
    }

    setError('Invalid email or password. Please try again.')
  }

  const handleRegister = ({ name, email, password, confirmPassword }) => {
    const normalizedEmail = email.trim().toLowerCase()

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (users[normalizedEmail]) {
      setError('An account with this email already exists.')
      return
    }

    const newUser = {
      password,
      name: name.trim(),
      role: 'Member',
    }

    setUsers((prev) => ({ ...prev, [normalizedEmail]: newUser }))
    setIsLoggedIn(true)
    setCurrentUser({ email: normalizedEmail, ...newUser })
    setError('')
    setView('login')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    setError('')
    setView('login')
  }

  const switchToRegister = () => {
    setView('register')
    setError('')
  }

  const switchToLogin = () => {
    setView('login')
    setError('')
  }

  if (isLoggedIn && currentUser) {
    return (
      <Dashboard
        email={currentUser.email}
        name={currentUser.name}
        role={currentUser.role}
        onLogout={handleLogout}
      />
    )
  }

  if (view === 'register') {
    return (
      <Register
        onRegister={handleRegister}
        error={error}
        onSwitchToLogin={switchToLogin}
      />
    )
  }

  return (
    <Login
      onLogin={handleLogin}
      error={error}
      onSwitchToRegister={switchToRegister}
    />
  )
}

export default App
