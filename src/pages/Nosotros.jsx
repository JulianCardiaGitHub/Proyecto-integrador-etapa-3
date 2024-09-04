import useTitulo from '../hooks/useTitulo'
import './Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <div>
    <h2 className="welcome">Bienvenidos a Vision Digital Technology</h2>
    <main className="main-us">
      <div className="img-container">
        <img className="vd" src="/public/img/vidriera-vision-digital.webp" alt="vidriera-vision-digital" />
      </div>
      <section>
        <div className="mission">
          <p>
            <strong>Misión:</strong> En Vision Digital Technology nos dedicamos a ofrecer
            soluciones tecnológicas integrales para satisfacer las necesidades de
            nuestros clientes. Nuestra misión es proporcionar servicios de
            reparación de computadoras y venta de insumos tecnológicos con la más
            alta calidad y profesionalismo, brindando una experiencia excepcional
            a cada persona que confía en nosotros.
          </p>
          <p>
            <strong>Visión:</strong> Nos esforzamos por ser líderes en el mercado de
            servicios tecnológicos, siendo reconocidos por nuestra excelencia en
            el servicio al cliente, nuestra habilidad técnica y nuestra
            contribución al desarrollo y avance tecnológico de nuestra
            comunidad.
          </p>
          <p>
            <strong>Servicios:</strong> En Vision Digital Technology, ofrecemos una amplia
            gama de servicios para satisfacer las necesidades tecnológicas de
            nuestros clientes:
          </p>
          <ul className="list-o">
            <li>
              <p>
                <strong>Reparación de Computadoras:</strong> Nuestro equipo de técnicos
                altamente capacitados está listo para diagnosticar y solucionar
                cualquier problema que pueda surgir en su equipo, ya sea una
                reparación de hardware o software.
              </p>
            </li>
            <li>
              <p>
                <strong>Venta de Insumos Tecnológicos:</strong> Contamos con una selección
                completa de insumos tecnológicos, incluyendo partes y accesorios
                para computadoras, laptops, impresoras y más. Trabajamos con los
                principales fabricantes para asegurar la calidad y
                disponibilidad de nuestros productos.
              </p>
            </li>
            <li>
              <p>
                <strong>Asesoramiento Técnico:</strong> Nuestro equipo está siempre
                disponible para brindar asesoramiento técnico personalizado, ya
                sea para ayudarlo a elegir el producto adecuado o para resolver
                cualquier duda que pueda tener sobre su equipo.
              </p>
            </li>
          </ul>
          <p>
            <strong>Compromiso con la Calidad:</strong> En Vision Digital Technology, nos
            comprometemos a ofrecer servicios y productos de la más alta
            calidad. Utilizamos tecnología de punta y técnicas probadas para
            garantizar que cada trabajo se realice de manera eficiente y
            precisa. Además, nos esforzamos por mantenernos al día con los
            últimos avances en tecnología para poder ofrecer a nuestros clientes
            las mejores soluciones disponibles.
          </p>
        </div>
        <div className="tres-maps">
          <h4>Nuestras 3 sucursales <i className="fa-solid fa-route"></i></h4>
          <div className="map1">
            <p className="p-map">Casa central: Berazategui-Centro</p>
            <iframe
              className="vd1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1949.003651109338!2d-58.20917932542738!3d-34.76011759990856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f490c329f7d%3A0x4c16b5132584fb3d!2s(COMPUTACI%C3%93N%2C%20INFORM%C3%81TICA%2C%20REPARACIONES)%20........VISI%C3%93N%20DIGITAL.......!5e0!3m2!1ses!2sar!4v1717878534749!5m2!1ses!2sar"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map2">
            <p className="p-map">Berazategui-oeste</p>
            <iframe
              className="vd2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.3472203705317!2d-58.22692463036015!3d-34.77098419667119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f2cd83cf8a5%3A0xedb26d51e8c37c2!2sAv.%20Rigolleau%203171%2C%20B1884CTF%20Berazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1717878959674!5m2!1ses!2sar"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map3">
            <p className="p-map">Ezpeleta-Centro</p>
            <iframe
              className="vd3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.5708282794076!2d-58.23776113741979!3d-34.75222617665462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32ee031c7965f%3A0xaaa43626d92c18bf!2sVisi%C3%B3n%20Digital!5e0!3m2!1ses!2sar!4v1717878899900!5m2!1ses!2sar"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Nosotros