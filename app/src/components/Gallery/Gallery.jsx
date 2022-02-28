import React from 'react'
import Project from './Project'

import '../../styles/Gallery.scss'

const Gallery = ({ projects }) => {

  return (
    <section id="gallery" className="gallery">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Proyectos</h2>
          <p>NUESTROS TRABAJOS</p>
        </div>

        <div className="row g-2" data-aos="fade-left">
          {
            projects.map((project, index) => <Project key={project.customerName} index={index} {...project} />)
          }
        </div>

      </div>
    </section>
  )
}

export default Gallery