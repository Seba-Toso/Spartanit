import React from 'react'
import Faq from './Faq'

import '../../styles/Faqs.scss'

const Faqs = ({ faqs }) => {


  return (
    faqs.length > 0 &&
    <section id="faq" className="faq section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          <p>PREGUNTAS FRECUENTES</p>
        </div>

        <div className="faq-list">
          <ul>

            {
              faqs.map((faq, index) => <Faq key={faq.question} {...faq} index={index} />)
            }

          </ul>
        </div>

      </div>
    </section>
  )
}

export default Faqs