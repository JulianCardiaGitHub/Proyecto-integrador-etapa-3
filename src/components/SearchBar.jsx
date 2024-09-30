import React from 'react'
import { Link } from 'react-router-dom'
import './SearchBar.scss'


const SearchBar = () => {
  return (



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
      <Link to="carrito"><img className="carrito" src="img/carrito.png" alt="Carrito" /></Link>
      
      </div>

    <div className="menu-toogle">
      <label htmlFor="menu" className="menu-toogle__label">
        <span className="menu-toogle__top-bread"></span>
        <span className="menu-toogle__meat"></span>
        <span className="menu-toogle__bottom-bread"></span>
      </label>
    </div>
  </div>

  
  )
}

export default SearchBar


