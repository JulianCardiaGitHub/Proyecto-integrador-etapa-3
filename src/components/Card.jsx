
import './Card.scss'

const Card = ( { producto }) => {

 

  return (
    <div className="card">
    <article className="card__article">
      <div className="card__image-container">
        <img
          src={producto.foto}
          alt={producto.nombre}
          className="card__image"
        />
      </div>
      <div className="card__content">
        <h2 className="card__heading">{producto.nombre}</h2>
        <h3>${producto.precio}</h3>
        <div className="card__description">
          <p className="p-products">
          {producto.detalles}
          </p>
         
          <div className="add-carrito">
            <i className="fa-solid fa-circle-plus" onClick={() => handleAgregar(producto)}></i>
          </div>
        </div>
      </div>
    </article>
  </div>
  )
}

export default Card