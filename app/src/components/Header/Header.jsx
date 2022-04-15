import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'
import Logo from './Logo'


import '../../styles/Header.scss'

const Header = ({ navigation }) => {
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
    navigation.home && { name: 'Home', to: 'hero' },
    navigation.about && { name: 'Nosotros', to: 'about' },
    navigation.services && { name: 'Características', to: 'features' },
    navigation.gallery && { name: 'Galería', to: 'gallery' },
    navigation.faqs && { name: 'FAQS', to: 'faq' },
    navigation.contact && { name: 'Contacto', to: 'contact' },
  ].filter(nav => nav)

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