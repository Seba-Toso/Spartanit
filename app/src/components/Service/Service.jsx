import React from 'react'
import ServiceTag from './ServiceTag'
import ServicePilar from './ServicePilar'

import infraestructura from '../../content/Cloud.svg'
import data from '../../content/Data.svg'
import communication from '../../content/Web.svg'

import '../../styles/Service.scss'

const Service = () => {

  const servicePilar = [
    {
      name: 'Infraestructura',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      items: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat1.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat2.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat3.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat4.',
      ],
      image: infraestructura,
      order: 2,
      ending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ex ea commodo consequat4.'
    },
    {
      name: 'Data Science',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      items: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat5.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat6.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat7.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat8.',
      ],
      image: data,
      order: 1
    },
    {
      name: 'Comunicación estratégica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      items: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat9.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat0.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat11.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat12.',
      ],
      image: communication,
      order: 2
    }
  ]
  const servicesTags = [
    {
      name: 'Lorem Ipsum',
      icon: 'bi bi-cloud-arrow-up',
      color: "#3f43fd"
    },
    {
      name: 'Lorem Ipsum2',
      icon: 'bi bi-cloud-arrow-up',
      color: "#3f43fd"
    },
    {
      name: 'Lorem Ipsum3',
      icon: 'bi bi-cloud-arrow-up',
      color: "#3f43fd"
    },
    {
      name: 'Lorem Ipsum4',
      icon: 'bi bi-cloud-arrow-up',
      color: "#3f43fd"
    },
    {
      name: 'Lorem Ipsum5',
      icon: 'bi bi-cloud-arrow-up',
      color: "#3f43fd"
    },
    {
      name: 'Lorem Ipsum6',
      icon: 'bi bi-cloud-arrow-up',
      color: "#3f43fd"
    },
    {
      name: 'Lorem Ipsum7',
      icon: 'bi bi-cloud-arrow-up',
      color: "#3f43fd"
    },
    {
      name: 'Lorem Ipsum8',
      icon: 'bi bi-cloud-arrow-up',
      color: "#3f43fd"
    }
  ]

  return (
    <>
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
      <section id="details" className="features">
        <div className="container">

          <div className="row" data-aos="fade-left">
            {
              servicesTags.map(tag => <ServiceTag key={tag.name} name={tag.name} icon={tag.icon} iconColor={tag.color} />)
            }
          </div>

        </div>
      </section >
    </>

  )
}

export default Service