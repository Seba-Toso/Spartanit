import React from 'react'
import Navigation from './Navigation'
import Logo from './Logo'
import '../../styles/Header.scss'

const Header = () => {
  return (
    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
      <div class="container d-flex align-items-center justify-content-between">

        <Logo />

        <Navigation />

      </div>
    </header>
  )
}

export default Header