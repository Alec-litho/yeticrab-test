import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import  HomePage  from './pages/home'
import { AdminPage } from './pages/admin'
import NotFoundPage from './pages/notFound'


export default function App() {
  return (
        <Router>
          <div className="app-container">
            <Navigation/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/admin" element={<AdminPage />} />
  

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
  )
}

function Navigation() {
  return (
    <nav className="main-nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/admin" className="nav-link">Admin</Link>
    </nav>
  )
}

