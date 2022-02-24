import React from 'react'
import '../../styles/General.scss'

const Anchor = ({ text, toLink }) => {
  const link = `#${toLink.toLowerCase()}`

  return (
    <a className="nav-link scrollto" href={link} >{text}</a >
  )
}

export default Anchor