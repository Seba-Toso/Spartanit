import React from 'react'
import Item from './Item'

import '../../styles/About.scss'
import video from '../../content/video.mp4'

const About = () => {

  const items = [
    {
      icon: 'bi bi-graph-up',
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sintoc caecati cupiditate non provident'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sintoc caecati cupiditate non provident'
    },
  ]

  return (
    <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">
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

            {
              items.map(item => <Item key={item.title} icon={item.icon} title={item.title} description={item.description} />)
            }

          </div>
        </div>

      </div>
    </section>
  )
}

export default About