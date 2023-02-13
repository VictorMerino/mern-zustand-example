import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

export const Navigation = () => {
  const logoutUser = useAuthStore(state => state.logout)

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <button onClick={logoutUser}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
