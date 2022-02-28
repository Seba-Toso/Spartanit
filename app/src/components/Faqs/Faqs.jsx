import React from 'react'
import Faq from './Faq'

import '../../styles/Faqs.scss'

const Faqs = () => {

  const faqs = [
    {
      answer: 'Non consectetur a erat nam at lectus urna duis?',
      response: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
      answer: 'Non consectetur at erat nam at lectus urna duis?',
      response: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
      answer: 'Non consectetur at erates nam at lectus urna duis?',
      response: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
      answer: 'Non consectetur at erates names at lectus urna duis?',
      response: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
  ]

  return (
    <section id="faq" className="faq section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          <p>PREGUNTAS FRECUENTES</p>
        </div>

        <div className="faq-list">
          <ul>

            {
              faqs.map((faq, index) => <Faq key={faq.answer} {...faq} index={index} />)
            }

          </ul>
        </div>

      </div>
    </section>
  )
}

export default Faqs