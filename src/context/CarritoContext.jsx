import { createContext } from "react";



const CarritoContext = createContext()

const CarritoProvider = ( { children } ) => {

const agregarProductoAlCarritoContext = (producto) => {

}


const eliminarProductoAlCarritoContext = (id) => {


}

    const data = {
             agregarProductoAlCarritoContext,
             eliminarProductoAlCarritoContext
    }


    return <CarritoContext.Provider value={data}>{ children }</CarritoContext.Provider>

}



export { CarritoContext }
export default CarritoProvider