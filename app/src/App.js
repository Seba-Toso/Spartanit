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

import image from './content/4_3_image.jpg'
import customerLogo from './content/helmetLogo.svg'
function App() {

  const projects = [
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

  return (
    <div className="App">
      <Header />
      <div id='top' >
        <Intro />
        <main id="main">
          <MessageBlock h1='Frase Motivadora' h2='Siempre se puede estar más motivado' />
          <About />
          <Service />
          <BlocksContainer />
          {projects && <Gallery projects={projects} />}
          <Faqs />
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
                            <img src={project.images[0]} alt="" className="img-fluid project-img" />
                          </div>
                          <div className="col-md-6">
                            <img src={project.images[0]} alt="" className="img-fluid project-img" />
                          </div>
                          <div className="col-md-6">
                            <img src={project.images[0]} alt="" className="img-fluid project-img" />
                          </div>
                          <div className="col-md-6">
                            <img src={project.images[0]} alt="" className="img-fluid project-img" />
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
