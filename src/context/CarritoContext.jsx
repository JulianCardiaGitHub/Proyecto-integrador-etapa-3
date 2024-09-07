import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";



const CarritoContext = createContext()

const CarritoProvider = ( { children } ) => {


    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])

function elProductoEstaenCarrito(producto ) {
    console.log(`Analizo si el producto esta ene le carrito`)
    const nuevoArray = carrito.filter(prod => prod.id === producto.id)
    return nuevoArray.length
}

function obtenerProductodeCarrito(producto) {
return carrito.find(prod => prod.id === producto.id)
}

const agregarProductoAlCarritoContext = (producto) => {
    
    console.log(`Ya estoy agregando el producto:`, producto)
   
if (!elProductoEstaenCarrito(producto)) {
      producto.cantidad = 1
      agregarAlCarrito(producto)
} else {
   const productoDeCarrito = obtenerProductodeCarrito(producto)
   console.log(productoDeCarrito)
   productoDeCarrito.cantidad++
}


}


const eliminarProductoAlCarritoContext = (id) => {
 console.log(id)

}

const guardarCarritoContext = async () => {

}

    const data = {
             carrito,
             agregarProductoAlCarritoContext,
             eliminarProductoAlCarritoContext,
             guardarCarritoContext
    }


    return <CarritoContext.Provider value={data}>{ children }</CarritoContext.Provider>

}



export { CarritoProvider }
export default  CarritoContext