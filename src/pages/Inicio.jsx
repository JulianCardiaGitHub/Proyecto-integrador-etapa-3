import Card from '../components/Card'
import './Inicio.scss'

const inicio = () => {
  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>Visión Digital Technology</h1>
          <p className="products">Se encontraron 12 productos</p>
        </header>

        <div className="cards-container" id="contenedor-cards">
        
       <Card />
          
        </div>
      </section>
      
    </main>
  )
}

export default inicio