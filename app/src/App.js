import { useState, useEffect, useCallback } from 'react';
import axios from 'axios'

import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro';
import MessageBlock from "./components/MessageBlock/MessageBlock"
import About from "./components/About/About";
import Service from "./components/Service/Service";
import BlocksContainer from "./components/RandomBlock/BlocksContainer";
import Gallery from "./components/Gallery/Gallery";
import Faqs from "./components/Faqs/Faqs";
import Contact from "./components/Contact/Contact";
import ToTopButton from "./components/General/ToTopButton";
import Footer from "./components/Footer/Footer";

import './styles/Sections.scss'

import infraestructura from './content/Cloud.svg'
import data from './content/Data.svg'
import communication from './content/Web.svg'
import image from './content/4_3_image.jpg'
import customerLogo from './content/helmetLogo.svg'


function App() {

  const [DBdata, setDBdata] = useState({})

  const getFaqsFromDB = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3001/api')
      const { data } = response
      console.log('Fetching Successfull');
      if (data) {
        setDBdata(data)
      }
    } catch (error) {
      console.log('Fetching go bad');
      console.error(error);
    }
  }, [setDBdata])

  useEffect(() => {
    getFaqsFromDB()

    return null
  }, [getFaqsFromDB])



  const projects = DBdata?.projects || [
    {
      customerLogo: customerLogo,
      customerName: 'Lorem Ipsum',
      project: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [image],
    },
    {
      customerLogo: customerLogo,
      customerName: 'Lorem Ipsum1',
      project: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [image],
    },
    {
      customerLogo: customerLogo,
      customerName: 'Lorem Ipsum2',
      project: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [image],
    },
    {
      customerLogo: customerLogo,
      customerName: 'Lorem Ipsum3',
      project: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [image],
    },
    {
      customerLogo: customerLogo,
      customerName: 'Lorem Ipsum4',
      project: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [image],
    },
    {
      customerLogo: customerLogo,
      customerName: 'Lorem Ipsum5',
      project: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [image],
    },
    {
      customerLogo: customerLogo,
      customerName: 'Lorem Ipsum6',
      project: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [image],
    },
    {
      customerLogo: customerLogo,
      customerName: 'Lorem Ipsum7',
      project: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [image],
    },
  ]

  const aboutItems = DBdata?.aboutItems || [
    {
      icon: 'bi bi-graph-up',
      title: '1.',
      description: 'Nos especializamos en análisis de datos, diseño y creación de estrategias comunicacionales.'
    },
    {
      icon: 'bi bi-graph-up',
      title: '2.',
      description: 'Nuestros servicios abarcan desde la creación de páginas web, campañas publicitarias en redes sociales, serviciio de branding hasta el posicionamiento en buscadores.'
    },
    {
      icon: 'bi bi-graph-up',
      title: '3.',
      description: 'Contamos con la infraestructura necesaria para hacer tu proyecto posible, cuidando de cada detalle, utilizando la íltima tecnología.'
    },
  ]

  const servicePilar = DBdata?.servicePilar || [
    {
      name: 'Comunicación entratégica',
      description: 'Diseñamos estrategias comunicacionales 360.',
      items: [
        'Diseños web impactantes, creación de contenidos para redes sociales y community managment.',
        'Administración de Google Adwords, Google Adsense y Google DV360.',
        'Posicionamiento SEO, redacción persuasiva y copywriting.',
        'Branding y diseño gráfico.',
      ],
      image: communication,
      order: 2,
      ending: ''
    },
    {
      name: 'Análisis de datos',
      description: 'El Bigdata nos provee de información valiosa para comprender el comportamiento de nuestros clientes y consumidores.',
      items: [
        'Google Analytics.',
        'Facebook Analytics.',
        'Análisis de base de datos SQL Oracle y MySQL.',
      ],
      image: data,
      order: 1
    },
    {
      name: 'Infraestructura',
      description: 'Con un equipo de expertos en infraestructura cloud y tradicional, brindamos soporte, mantenimiento, migraciones y control de costes.',
      items: [
        'Migraciones hacia diferentes entornos como AWS, DigitalOcean, Azure, Google Cloud, Office 365.',
        'Networking, DNS, Hosting, VPNS, Microservicios.',
        'Soporte IT, Help desk, capacitaciones, updates de OS.',
        'Automatización de tareas',
        'Consultoría en buenas prácticas y mejora contínua.',
        'Capacitaciones en el uso de nuevas tecnologías.'
      ],
      image: infraestructura,
      order: 2
    }
  ]
  const servicesTags = DBdata?.servicesTags || [/*
    {
      name: 'Lorem Ipsum',
      icon: 'bi bi-cloud-arrow-up',
      color: "#3f43fd"
      
    },*/
  ]

  const blocks = DBdata?.blocks || []

  const faqs = DBdata?.faqs || [
    {
      question: 'Necesito ayuda, no sé por dónde empezar.',
      response: 'Dejanos un mensaje y te contestamos a la brevedad. Nuestros presupuestos escritos, por videollamada o por teléfono son sin cargo. Nuestras consultorías presenciales tienen un costo por hora.'
    },
    {
      question: 'Plazos.',
      response: 'Depende el servicio y el tipo de proyecto requerido contamos con plazos de entrega distintos.'
    },
    {
      question: 'Garantía.',
      response: 'Todos nuestros trabajos están garantizados, su plazo será estimado dependiendiendo la magnitud.'
    },
    {
      question: 'Capacitaciones.',
      response: 'Contamos con manuales de uso que se entregan con cada trabajo en caso de ser necesarios.'
    },
  ]

  const navigation = {
    home: true,
    about: aboutItems.length > 0,
    services: servicePilar.length > 0,
    gallery: projects.length > 0,
    faqs: faqs.length > 0,
    contact: true,
  }

  return (
    <div className="App">
      <Header navigation={navigation} />
      <div id='top' >
        <Intro />
        <main id="main">
          <MessageBlock h1='"Lo que no se comunica, no existe"' />
          {blocks && <BlocksContainer blocks={blocks} place={1} />}
          {aboutItems && <About aboutItems={aboutItems} />}
          {blocks && <BlocksContainer blocks={blocks} place={2} />}
          {servicePilar && <Service servicePilar={servicePilar} servicesTags={servicesTags} />}
          {blocks && <BlocksContainer blocks={blocks} place={3} />}
          {projects && <Gallery projects={projects} />}
          {blocks && <BlocksContainer blocks={blocks} place={4} />}
          {faqs && <Faqs faqs={faqs} />}
          <Contact />
        </main>

      </div>
      <Footer />

      <ToTopButton />

      {
        projects.map((project, index) => {
          return (
            <div key={index} style={{ maxWidth: '100vw !important' }} className="modal fade" id={`project-${index}`} tabIndex={`-${index}`} aria-labelledby={`${index}`} aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered project-modal">
                <div className="modal-content">
                  <div className="modal-header p-0">
                    <button type="button" className="btn-close-white" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-dash"></i></button>
                  </div>
                  <div className="modal-body">
                    <div className="row modal-project-content-container">
                      <div className="col-lg-6">
                        <div className="row g-2">
                          <div className="col-md-6">
                            {project.images[0] && <img src={project.images[0]} alt="" className="img-fluid project-img" />}
                          </div>
                          <div className="col-md-6">
                            {project.images[1] && <img src={project.images[1]} alt="" className="img-fluid project-img" />}
                          </div>
                          <div className="col-md-6">
                            {project.images[2] && <img src={project.images[2]} alt="" className="img-fluid project-img" />}
                          </div>
                          <div className="col-md-6">
                            {project.images[3] && <img src={project.images[3]} alt="" className="img-fluid project-img" />}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 modal-project-content">
                        <h4 className="modal-title text-end mb-4">{project.customerName}</h4>
                        <h5 className="modal-subtitle text-end mb-4">{project.project}</h5>
                        <p className="modal-description">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
