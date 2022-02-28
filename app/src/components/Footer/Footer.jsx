import React from 'react'

import brandLogo from '../../content/helmetLogo.svg'
import '../../styles/Footer.scss'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row text-center">
            <p>Alguna frase amiga sobre Spartan IT </p>
          </div>
          <div className="row text-center py-4">
            <div className='col-md-4'>
              <p>Lorem Ipsum</p>
            </div>
            <div className='col-md-4'>
              <p>Seguinos en nuestras redes</p>
            </div>
            <div className='col-md-4'>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
          <div className="social-icons row justify-content-center text-center w-50 px-5 pt-1 pb-3 m-auto">
            <div className='social-icon col-xs-3'><i className="bi bi-youtube"></i></div>
            <div className='social-icon col-xs-3'><i className="bi bi-linkedin"></i></div>
            <div className='social-icon col-xs-3'><i className="bi bi-facebook"></i></div>
            <div className='social-icon col-xs-3'><i className="bi bi-instagram"></i></div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="logo py-4">
          <img src={brandLogo} alt="Brand Logo" className="img-fluid me-2" width={40} />
        </div>
      </div>

      <div className="">
        <div className="copyright py-2">
          &copy; Copyright <strong><span>2022 Spartan IT</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer