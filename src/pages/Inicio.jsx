import Card from '../components/Card'
import useTitulo from '../hooks/useTitulo'
import './Inicio.scss'

const inicio = () => {

  useTitulo('Inicio')

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
      <div class="whatsapp"><i class="fa-brands fa-whatsapp fa-2xl"></i></div>

    </main>
  )
}

export default inicio