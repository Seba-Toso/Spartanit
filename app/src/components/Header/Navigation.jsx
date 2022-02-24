import React from 'react'
import Anchor from '../General/Anchor'

const Navigation = () => {

  const navigationTags = [
    { name: 'Home', to: 'hero' },
    { name: 'Nosotros', to: 'about' },
    { name: 'Características', to: 'features' },
    { name: 'Galería', to: 'gallery' },
    { name: 'Contacto', to: 'contact' },
  ]

  return (
    <nav id="navbar" className="navbar">
      <ul>
        {
          navigationTags.map(tag => <li key={tag.name}><Anchor text={tag.name} toLink={tag.to} /></li>)
        }
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  )
}

export default Navigation