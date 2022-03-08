import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'
import Logo from './Logo'


import '../../styles/Header.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    transition: '200ms all ease-in-out',
    background: scrollPosition <= 150 ? 'transparent' : '#0205a1e8',
  }

  const navigationTags = [
    { name: 'Home', to: 'hero' },
    { name: 'Nosotros', to: 'about' },
    { name: 'Características', to: 'features' },
    { name: 'Galería', to: 'gallery' },
    { name: 'Contacto', to: 'contact' },
  ]

  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent" style={headerStyle}>
      <div className="container d-flex align-items-center justify-content-between">

        <Logo scrollPosition={scrollPosition} />

        <Navigation navigationTags={navigationTags} setShowMenu={setShowMenu} showMenu={showMenu} />
        <NavigationMobile navigationTags={navigationTags} setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </header>
  )
}

export default Header