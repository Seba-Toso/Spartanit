import React from 'react'
import Anchor from '../General/Anchor'

const NavigationMobile = ({ navigationTags, setShowMenu, showMenu }) => {

  const menuStyles = {
    left: showMenu ? '0' : '100vw',
  }

  return (
    <nav id="navbar" className="navbar navbar-mobile" style={menuStyles} onBlur={() => setShowMenu(false)}>
      <ul>
        {
          navigationTags.map(tag => <li key={tag.name} className='container'><Anchor text={tag.name} toLink={tag.to} /></li>)
        }
      </ul>
    </nav >
  )
}

export default NavigationMobile