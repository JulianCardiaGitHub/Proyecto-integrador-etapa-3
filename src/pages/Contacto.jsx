import useTitulo from "../hooks/useTitulo";
import "./Contacto.scss";

const Contacto = () => {
  useTitulo("Contacto");

  return (
    <>
      <main className="main-cont">
        <h2 className="complete">Completa tus datos y envia tu consulta..!</h2>
        <div className="img-cont">
          <img className="cont" src="/img/contacto.webp" alt="Contacto" />
        </div>
        <fieldset className="information">
          <legend>Completa tus datos</legend>

          <div className="information__personal">
            <div className="title">
              <label htmlFor="lbl-name">Nombre:*</label>
            </div>
            <input type="text" id="lbl-name" required />
          </div>
          <div className="information__personal">
            <div className="title">
              <label htmlFor="lbl-lastname">Apellido:*</label>
            </div>
            <input type="text" id="lbl-lastname" required />
          </div>
          <div className="information__personal">
            <div className="title">
              <label htmlFor="lbl-document">Documento:*</label>
            </div>
            <input type="text" id="lbl-document" required />
          </div>

          <div className="information__personal">
            <div className="title">
              <label htmlFor="lbl-description">Dejanos tu mensaje...</label>
            </div>
            <textarea
              name="info"
              id="lbl-description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </fieldset>

        <fieldset className="contact">
          <legend>Datos de Contacto</legend>
          <div className="contac__contact-information">
            <div className="title">
              <label htmlFor="lbl-tel">Teléfono:</label>
            </div>
            <input
              className="input"
              type="text"
              id="lbl-tel"
              name="telefono"
              placeholder="Codigo de area y Numero"
            />
          </div>
          <div className="contac__contact-information">
            <div className="title">
              <label htmlFor="lbl-email">Direcion de correo electrónico:</label>
            </div>
            <input
              className="input"
              type="email"
              id="lbl-email"
              name="email"
              placeholder="Ej:mail@gmail.com"
            />
          </div>
        </fieldset>

        <div className="news">
          <input
            type="checkbox"
            id="novedades"
            name="novedades"
            value="novedades"
          />
          <label htmlFor="news">Deseo recibir novedades</label>
        </div>

        <p className="mandatory-field">*:campo obligatorio.</p>
      </main>
      <div className="buttons">
        <button className="button">Enviar</button>
      </div>
    </>
  );
};

export default Contacto;
