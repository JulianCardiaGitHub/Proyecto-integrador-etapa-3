import './ItemCarrito.scss'
import React, { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'

const ItemCarrito = ({producto}) => {

    const { eliminarProductoDelCarritoContext } = useContext(CarritoContext) 

    const handleEliminar = (id) => {
       // console.log('Eliminando el producto',id)
        eliminarProductoDelCarritoContext(id)
    }


  return (

    <tr>
        <td>
            <img src={producto.foto} alt={producto.nombre} width="50px" />
        </td>
        <td>{producto.nombre}</td>
        <td>{producto.cantidad}</td>
        <td>{producto.precio}</td>
        <td>
            <button className="btn-borrar" onClick={() => handleEliminar(producto.id)}><i className="fa-solid fa-eraser"></i></button>
        </td>
    </tr>

  )
}

export default ItemCarrito