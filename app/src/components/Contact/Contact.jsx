import React from 'react'
import Form from './Form'

import '../../styles/Contact.scss'

const Contact = ({ tel, mail }) => {

  let telephone = tel || ''
  let email = mail || ''

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Contacto</h2>
          <p>COMUNICATE CON NOSOTROS</p>
        </div>

        <div className="row">

          <div className="col-lg-4" data-aos="fade-right" >
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Visitanos:</h4>
                <p>Buenos Aires, Argentina</p>
              </div>

              {
                email &&
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Escribinos:</h4>
                  <p>{email ?? 'info@spartanit.com.ar'}</p>
                </div>
              }

              {
                telephone &&
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Llamanos:</h4>
                  <p>{telephone}</p>
                </div>
              }

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" >

            <Form />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact