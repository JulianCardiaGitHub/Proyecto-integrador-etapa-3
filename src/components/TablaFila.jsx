import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ( { producto , eliminarProducto }) => {

  const { setProductoAEditar } = useContext(ProductosContext)
  

  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  }


  const handleEliminar = () => {
   
    eliminarProducto(producto.id)
  }
  
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
      <button className='btn-edit' onClick={() => handleEditar(producto)}><i className="fa-solid fa-pen-to-square"/></button>
      <button className= 'btn-eliminar' onClick={() => handleEliminar(producto)}><i className="fa-solid fa-trash-can"/></button>
      </td>
    </tr>
  )
}

export default TablaFila

