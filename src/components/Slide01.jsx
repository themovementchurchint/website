import React from 'react'
import Slide01Hero from './Slide01Hero'
import Slide01Bottom from './Slide01Bottom'

function Slide01() {
  return (
    <div
      className="relative hero min-h-screen"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Slide01Hero />
      <Slide01Bottom />
    </div>
  )
}

export default Slide01
