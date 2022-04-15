import React from 'react'
import imageDefault from '../../content/fullLogoBlueBg.png'

const ServicePilar = ({ name, description, items, image, order, ending }) => {

  const watchOrder = () => {
    if (order === 1) {
      return 2
    }
    return 2
  }

  return (
    <div className="row content" >
      <div className={`col-md-4 order-${order} order-md-${watchOrder()}`} data-aos="fade-right">
        <img src={image ?? imageDefault} className="img-fluid" alt="" />
      </div>
      <div className={`col-md-8 pt-4 order-${watchOrder()} order-md-${order}`} data-aos="fade-up">
        <h3>{name}</h3>
        <p className="fst-italic">
          {description}
        </p>
        <ul>
          {
            items.map(item => item && <li key={item}><i className="bi bi-check"></i>{item}</li>)
          }
        </ul>
        {
          ending && <p>{ending}</p>
        }
      </div>
    </div >
  )
}

export default ServicePilar