import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'
import Swal from 'sweetalert2'

const TablaFila = ( { producto }) => {

  const { setProductoAEditar , eliminarProductoContext } = useContext(ProductosContext)
  

  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  }



  const handleEliminar = () => {
   
    
Swal.fire({
  title: "ESTAS SEGURO?...",
  text: `Estas borrando el producto: ${producto.nombre}`,
  icon: "warning" ,
  showCancelButton: true,
  confirmButtonColor: "#25d366",
  cancelButtonColor: "#d33",
  confirmButtonText: "SI, quiero borrarlo!!",
  cancelButtonText: "NO!... Volver atras",
}).then((result) => {
  if (result.isConfirmed) {
    eliminarProductoContext(producto.id)
    Swal.fire({
      title: "BORRADO",
      text: "El producto se borro con exito",
      icon: "success"
      
    });
  }
});

    
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
      <button className= 'btn-eliminar' onClick={handleEliminar}><i className="fa-solid fa-trash-can"/></button>
      </td>
    </tr>
  )
}

export default TablaFila

