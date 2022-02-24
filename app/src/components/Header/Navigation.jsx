import React from 'react'

const Navigation = () => {
  return (
    <nav id="navbar" class="navbar">
      <ul>
        <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a class="nav-link scrollto" href="#about">Nosotros</a></li>
        <li><a class="nav-link scrollto" href="#features">Características</a></li>
        <li><a class="nav-link scrollto" href="#gallery">Galería</a></li>
        <li><a class="nav-link scrollto" href="#contact">Contacto</a></li>
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>
  )
}

export default Navigation