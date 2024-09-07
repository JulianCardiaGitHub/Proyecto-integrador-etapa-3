import { useContext } from "react"
import useTitulo from "../hooks/useTitulo"
import CarritoContext from "../context/CarritoContext"


const Carrito = () => {

  useTitulo('Carrito')
 
    
const { carrito, eliminarProductoAlCarritoContext, guardarCarritoContext  } = useContext(CarritoContext)


  return (
    
   <h1>Productos en el carrito</h1>
   
    
  )
}

export default Carrito