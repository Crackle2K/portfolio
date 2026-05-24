import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">DS</Link>
      <div className="nav-links">
        <Link to="/showcase" className="nav-link">Showcase</Link>
        <Link to="/achievements" className="nav-link">Certifications</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
