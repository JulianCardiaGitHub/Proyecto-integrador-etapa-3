import './Card.scss'

const Card = () => {
  return (
    <div className="card">
    <article className="card__article">
      <div className="card__image-container">
        <img
          src="img/pop-keys.webp"
          alt="pop-keys"
          className="card__image"
        />
      </div>
      <div className="card__content">
        <h2 className="card__heading">POP KEYS</h2>
        <div className="card__description">
          <p className="p-products">
            Da rienda suelta a tu personalidad en tu escritorio y más
            allá con POP Keys, con una estética de escritorio llamativa
            y divertidas teclas de emojis personalizables.
          </p>
          <div className="add-carrito">
            <i className="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
    </article>
  </div>
  )
}

export default Card