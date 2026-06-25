import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const VALID_EMAIL = 'admin@example.com'
const VALID_PASSWORD = 'password123'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (email, password) => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setIsLoggedIn(true)
      setError('')
    } else {
      setError('Invalid email or password. Please try again.')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setError('')
  }

  if (isLoggedIn) {
    return <Dashboard email={VALID_EMAIL} onLogout={handleLogout} />
  }

  return <Login onLogin={handleLogin} error={error} />
}

export default App
