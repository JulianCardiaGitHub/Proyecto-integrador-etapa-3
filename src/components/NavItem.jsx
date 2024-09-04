import React from 'react'

const NavItem = ({item}) => {
  return (
    <li className="nav-bar__nav-item">
            <a href={item.ruta} className="nav-bar__nav-link">
              {item.nombre}
            </a>
          </li>
  )
}

export default NavItem