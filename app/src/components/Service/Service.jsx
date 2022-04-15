import React from 'react'
import ServiceTag from './ServiceTag'
import ServicePilar from './ServicePilar'



import '../../styles/Service.scss'

const Service = ({ servicePilar, servicesTags }) => {



  return (
    <>
      {
        servicePilar.length > 0 &&
        <section id="features" className="details mt-5">
          <div className="container">

            <div className="section-title" data-aos="fade-up">
              <h2>Características</h2>
              <p>A QUÉ NOS DEDICAMOS</p>
            </div>

            {
              servicePilar.map(pilar => <ServicePilar key={pilar.name} {...pilar} />)
            }

          </div>
        </section>
      }
      {
        servicesTags.length > 0 &&
        <section id="details" className="features">
          <div className="container">

            <div className="row" data-aos="fade-left">
              {
                servicesTags.map(tag => <ServiceTag key={tag.name} name={tag.name} icon={tag.icon} iconColor={tag.color} />)
              }
            </div>

          </div>
        </section >
      }
    </>

  )
}

export default Service