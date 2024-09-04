import { useEffect } from "react"



const useTitulo = ( textoTitulo = 'Sin título') => {

    useEffect(() => {
      document.title = `Visión Digital Technology  - ${textoTitulo}`
    }, [])
    
}

export default useTitulo