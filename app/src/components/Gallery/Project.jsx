import React from 'react'

const Project = ({ customerLogo, customerName, project, description, images, index }) => {



  return (
    <>
      <div className="col-lg-3 col-md-4" data-bs-toggle="modal" data-bs-target={`#project-${index}`} >
        <div className="gallery-item" data-aos="zoom-in" >
          <img src={customerLogo} alt="" className="logo" />
          <img src={images[0]} alt="" className="img-fluid project-img" />
        </div>
      </div>
    </>

  )
}

export default Project