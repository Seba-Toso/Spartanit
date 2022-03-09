import React from 'react'
import Block from './Block'

import image from '../../content/square_image.jpg'

const BlocksContainer = () => {

  const blocks = [
    {
      name: 'Infraestructura',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ex ea commodo consequat4.',
      items: [
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat1.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat2.',
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat3.',
      ],
      image: image,
      order: 2,
    },
  ]

  return (
    <section id="randomBlock" className="details">
      <div className="container">
        {
          blocks.map(block => <Block key={block.name} {...block} />)
        }
      </div>
    </section>
  )
}

export default BlocksContainer