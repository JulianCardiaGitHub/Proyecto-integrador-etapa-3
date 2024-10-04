import { useContext } from 'react'
import Card from '../components/Card'
import useTitulo from '../hooks/useTitulo'
import './Inicio.scss'
import ProductosContext from '../context/ProductosContext'

const inicio = () => {

  const { productos } = useContext(ProductosContext)

  useTitulo('Inicio')

  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>Visión Digital Technology</h1>
          <p className="products">Se encontraron 12 productos</p>
        </header>

        <div className="cards-container" id="contenedor-cards">
        
        {
          productos && productos.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))
        }



      
          
        </div>
      </section>
      <div className="whatsapp">
  <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-whatsapp fa-2xl"></i>
  </a>
</div>


    </main>
  )
}

export default inicio