import React from 'react'

import brandLogo from '../../content/helmetLogo.svg'
import '../../styles/Footer.scss'

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row text-center">
            <p>Alguna frase amiga sobre Spartan IT </p>
          </div>
          <div class="row text-center py-4">
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
            <div className='social-icon col-sm-3'><i className="bi bi-youtube"></i></div>
            <div className='social-icon col-sm-3'><i className="bi bi-linkedin"></i></div>
            <div className='social-icon col-sm-3'><i className="bi bi-facebook"></i></div>
            <div className='social-icon col-sm-3'><i className="bi bi-instagram"></i></div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <div class="logo py-4">
          <img src={brandLogo} alt="Brand Logo" className="img-fluid me-2" width={40} />
        </div>
      </div>

      <div class="">
        <div class="copyright py-2">
          &copy; Copyright <strong><span>2022 Spartan IT</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer