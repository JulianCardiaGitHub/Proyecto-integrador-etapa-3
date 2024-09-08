import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";



const CarritoContext = createContext()

const CarritoProvider = ( { children } ) => {


    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])

function elProductoEstaenCarrito(producto ) {
    console.log(`Analizo si el producto esta en el  carrito`)
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
   window.localStorage.setItem(`carrito`, JSON.stringify(carrito))
}


}


const eliminarProductoDelCarritoContext = (id) => {
 console.log(id)
 eliminarDelCarrito(id)

}

const limpiarCarritoContext = () => {
    limpiarCarrito()
}


const guardarCarritoContext = async () => {
console.log(carrito)
}

    const data = {
             carrito,
             agregarProductoAlCarritoContext,
             eliminarProductoDelCarritoContext,
             guardarCarritoContext,
             limpiarCarritoContext
    }


    return <CarritoContext.Provider value={data}>{ children }</CarritoContext.Provider>

}



export { CarritoProvider }
export default  CarritoContext