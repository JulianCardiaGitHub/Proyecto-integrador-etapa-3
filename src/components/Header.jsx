import './Header.scss'

const Header = () => {
  return (
    <header className="main-header">
    <input type="checkbox" id="menu" />

    <nav className="nav-bar">
      <ul className="nav-bar__nav-list">
        <li className="nav-bar__nav-item">
          <a href="#" className="nav-bar__nav-link">Inicio</a>
        </li>
        <li className="nav-bar__nav-item">
          <a href="#" className="nav-bar__nav-link">Alta</a>
        </li>
        <li className="nav-bar__nav-item">
          <a href="/views/nosotros.html" className="nav-bar__nav-link">Nosotros</a>
        </li>
        <li className="nav-bar__nav-item">
          <a href="/views/contacto.html" className="nav-bar__nav-link">Contacto</a>
        </li>
      </ul>
    </nav>
    
 

    <div className="search-bar">
      <div className="search-bar__logo-container">
        <img className="logo" src="img/logo.png" alt="Vision Digital" />
      </div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label"
          ><img src="img/lupa.png" alt="Buscar"
        /></label>
        <input type="search" className="search-bar__form-search" id="busqueda" />
        <input type="submit" className="search-bar__form-submit" value="Buscar" />
      </form>
      <div className="search-bar__carrito-container">
        <img className="carrito" src="img/carrito.png" alt="Carrito" />
      </div>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
    
  </header>
  )
}

export default Header