import React from 'react'

const Project = ({ logo, customerName, project, description, images, index }) => {



  return (
    <>
      <div className="col-lg-3 col-md-4" data-bs-toggle="modal" data-bs-target={`#project-${index}`} >
        <div className="gallery-item" data-aos="zoom-in" data-aos-delay="100">
          <img src={images[0]} alt="" className="img-fluid" />
        </div>
      </div>
    </>

  )
}

export default Project