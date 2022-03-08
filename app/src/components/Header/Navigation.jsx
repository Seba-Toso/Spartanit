import React from 'react'
import Anchor from '../General/Anchor'

const Navigation = ({ navigationTags, setShowMenu, showMenu }) => {

  return (
    <nav id="navbar" className="navbar">
      <ul>
        {
          navigationTags.map(tag => <li key={tag.name}><Anchor text={tag.name} toLink={tag.to} /></li>)
        }
      </ul>
      {!showMenu && <i className="bi bi-list mobile-nav-toggle" onClick={() => setShowMenu(!showMenu)}></i>}
      {showMenu && <i className="bi mobile-nav-toggle bi-x" onClick={() => setShowMenu(!showMenu)}></i>}
    </nav>
  )
}

export default Navigation