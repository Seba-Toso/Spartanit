import React from 'react'
import helmetLogo from '../../content/helmetLogo.svg'

const Content = (props) => {

  const color = props.fontColor === 'dark' ? 'rgb(0, 74, 173)' : 'rgb(200, 200, 200)'

  return (
    <div className="container py-5" style={{ color: color }}>
      <div className="row justify-content-between">
        <div className="col-lg-4 order-2 order-lg-1 hero-img" data-aos="fade-right">
          <img src={helmetLogo} className="img-fluid" alt="Helmet Logo" />
        </div>

        <div className="col-lg-7 pt-5 pt-lg-0 order-1 order-lg-2 d-flex align-items-center justify-content-end">
          <div data-aos="zoom-out" className='content'>
            <h1><span>Spartan IT</span></h1>
            <h2>Communication & Analitics</h2>
            <div className="text-center text-lg-start">
              <a href="#contact" className="btn-get-started scrollto">Hacerlo realidad</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Content