import React from 'react'
import Item from './Item'

import '../../styles/About.scss'
import videoDefault from '../../content/video.mp4'
import imageDefault from '../../content/fullLogoBlueBg.png'

const About = ({ aboutItems }) => {

  const video = videoDefault
  const image = imageDefault

  return (
    aboutItems.length > 0 &&
    <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
            data-aos="fade-right" style={{ overflow: 'hidden' }}>
            {(
              video &&
              <video loop playsInline muted autoPlay
                className="col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch"
                style={{ height: '100%', width: '100%', transform: 'scale(1.5)' }}>
                <source src={video} type="video/mp4" />
              </video>
            ) ||
              <img src={image ?? imageDefault} className="img-fluid" alt="" />
            }
          </div>

          <div
            id='nosotros'
            className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
            data-aos="fade-left">
            <h1>Nosotros</h1>
            <p style={{ marginLeft: '85px', fontSize: '1.3em' }}>
              Somos un equipo de trabajo enfocado en que lleves la comunicación de tu empresa al próximo nivel.
            </p>

            {
              aboutItems.map(item => <Item key={item.title} icon={item.icon} title={item.title} description={item.description} />)
            }

            {
              //<p style={{ marginLeft: '85px', marginTop: '60px', fontSize: '1.3em' }}>
              //¿Querés conocernos un poco más? Mirá el video.
              //</p>
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default About