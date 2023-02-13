import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, ProfilePage, RegisterPage } from './pages'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
