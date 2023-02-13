import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, ProfilePage, RegisterPage } from './pages'
import { Navigation } from './components/Navigation'
import { ProtectedRoutes } from './components/ProtectedRoutes'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />

        <Route element={<ProtectedRoutes isAllowed={false} />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
