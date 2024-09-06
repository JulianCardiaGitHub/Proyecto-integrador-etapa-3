import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ( { producto }) => {

  const { setProductoAEditar } = useContext(ProductosContext)
  

  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  }
  
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.descripccion}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <div className="editar"><i className="fa-solid fa-pen-to-square" onClick={(producto) => handleEditar(producto)}></i></div>
        <div className="eliminar"><i className="fa-solid fa-trash-can"></i></div>
      </td>
    </tr>
  )
}

export default TablaFila