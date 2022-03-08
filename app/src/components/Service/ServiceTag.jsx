import React from 'react'

const ServiceTag = ({ name, icon, iconColor }) => {
  return (
    <div className="col-lg-3 col-md-4 mb-2">
      <div className="icon-box" data-aos="zoom-in">
        <i className={icon} style={{ color: iconColor }}></i>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default ServiceTag