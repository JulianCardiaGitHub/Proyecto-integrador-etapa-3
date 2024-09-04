import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="copyright">© 2024 Todos los derechos reservados.</p>

        <p className="vdt">Vision Digital Technology</p>
      </div>
    </footer>
    
  )
}

export default Footer