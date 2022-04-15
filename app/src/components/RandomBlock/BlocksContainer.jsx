import React from 'react'
import Block from './Block'



const BlocksContainer = ({ blocks, place }) => {

  const correctBlocks = blocks.filter(block => block.place === place)
  return (
    correctBlocks.length > 0 &&
    <section id="randomBlock" className="details">
      <div className="container">
        {
          correctBlocks.map(block => <Block key={block.name} {...block} />)
        }
      </div>
    </section>
  )
}

export default BlocksContainer