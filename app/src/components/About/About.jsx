import React from 'react'

import '../../styles/About.scss'
import video from '../../content/video.mp4'
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">
          {
            //style={"background-image: url(assets/logos/Development.jpg); background-size: cover; background-position-x: 70%;"}
          }
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
            data-aos="fade-right" style={{ overflow: 'hidden' }}>
            <video loop playsInline muted autoPlay
              className="col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch"
              style={{ height: '100%', width: '100%', transform: 'scale(1.5)' }}>
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <div
            className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
            data-aos="fade-left">
            <h1>Nosotros</h1>
            <p style={{ marginLeft: '85px', fontSize: '1.3em' }}>
              Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus
              laudantium.e.
            </p>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
              {
                //<div className="icon"><i className="bi bi-graph-up"></i></div>
              }
              <h4 className="title">Lorem Ipsum</h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident</p>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              {
                //<div className="icon"><i className="bi bi-window-fullscreen"></i></div>
              }
              <h4 className="title">Nemo Enim</h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About