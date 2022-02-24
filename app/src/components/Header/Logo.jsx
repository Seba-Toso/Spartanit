import React from 'react'
import brandLogo from '../../content/fullLogoBlueBg.png'
const Logo = () => {
  return (
    <div class="logo">
      <a href="top"><img src={brandLogo} alt="Brand Logo" class="img-fluid" /></a>
      <h1><a href="#top"><span>Spartan IT</span></a></h1>
    </div>
  )
}

export default Logo