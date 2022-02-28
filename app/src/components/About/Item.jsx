import React from 'react'

const Item = ({ icon, title, description }) => {
  return (
    <div className="icon-box" data-aos="zoom-in">
      {
        //<div className="icon"><i className={icon}></i></div>
      }
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
    </div>
  )
}

export default Item