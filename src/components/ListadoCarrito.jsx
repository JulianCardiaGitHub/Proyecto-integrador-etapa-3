import './ListadoCarrito.scss'
import React, { useContext } from "react";
import ItemCarrito from "./ItemCarrito";
import CarritoContext from "../context/CarritoContext";

const ListadoCarrito = () => {


  const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)

  const handleComprar = () => {
    console.log('Comprando...lo del carrito!')
    guardarCarritoContext()
  }

  const handleLimpiarCarrito = () => {
    console.log('Vaciando el carrito completo..')
    limpiarCarritoContext()
  }

  return (


    <>
        <table className='tabla-carrito'>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    carrito.length <= 0 ? (
                        <tr>
                            <td colSpan={5}>No hay productos <i className="fa-regular fa-circle-xmark"></i></td>
                        </tr>
                    ) : (
                        carrito.map((producto, idx) => (
                            <ItemCarrito key={idx} producto={producto} />
                        ))
                    )
                }
            </tbody>
        </table>
        <hr />
        { !carrito.length <= 0 && (
            <>
                <div className="btn-listado">
                    <button className="btn-delete" onClick={handleLimpiarCarrito}><i className="fa-solid fa-delete-left"></i></button>
                    <button className="btn-comprar"onClick={handleComprar}><i className="fa-solid fa-money-bill-1-wave"></i></button>
                </div>
                </>
            )
        }
    </>
  )
}

export default ListadoCarrito;
