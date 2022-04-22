import React from 'react'

import brandLogo from '../../content/helmetLogo.svg'
import '../../styles/Footer.scss'

const Footer = ({ context }) => {

  const date = new Date()

  let youtube = context[0]?.link || ""
  let linkedin = context[1]?.link || ""
  let facebook = context[2]?.link || ""
  let instagram = context[3]?.link || ""


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
            {youtube && <div className='social-icon col'><a href={youtube} target="_blank" rel="noreferrer" ><i className="bi bi-youtube"></i></a></div>}
            {linkedin && <div className='social-icon col'><a href={linkedin} target="_blank" rel="noreferrer" ><i className="bi bi-linkedin"></i></a></div>}
            {facebook && <div className='social-icon col'><a href={facebook} target="_blank" rel="noreferrer" ><i className="bi bi-facebook"></i></a></div>}
            {instagram && <div className='social-icon col'><a href={instagram} target="_blank" rel="noreferrer" ><i className="bi bi-instagram"></i></a></div>}
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
          &copy; Copyright <strong><span>{date.getUTCFullYear()} Spartan IT</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer