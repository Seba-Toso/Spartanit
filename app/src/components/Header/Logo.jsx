import React from 'react'
import brandLogo from '../../content/helmetLogo.svg'

const Logo = ({ scrollPosition }) => {

  const logoStyle = {
    transition: '200ms all ease-in-out',
    opacity: scrollPosition <= 250 ? 0 : 1,
    pointerEvents: scrollPosition <= 250 ? 'none' : 'all'
  }

  return (
    <div className="logo" style={logoStyle}>
      <a href="#top"><img src={brandLogo} alt="Brand Logo" className="img-fluid me-2" width={40} /></a>
      <h1><a href="#top"><span>Spartan IT</span></a></h1>
    </div>
  )
}

export default Logo