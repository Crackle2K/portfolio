import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>© {currentYear} Dinesh Sinnathamby</p>
      <div className="footer-links">
        <Link to="/showcase">Showcase</Link>
        <Link to="/achievements">Certifications</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://github.com/Crackle2K" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  )
}

export default Footer
