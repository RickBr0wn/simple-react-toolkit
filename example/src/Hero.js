import React from 'react'
import hero from './images/hero.jpg'

const Hero = () => {
  return (
    <div>
      <img src={hero} style={{ width: '100%' }} />
      <div
        style={{
          position: 'absolute',
          top: '300px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          textAlign: 'center',
          width: '100%',
        }}>
        <h1 style={{ fontSize: '6.2rem' }}>Simple React Toolkit</h1>
        <hr style={{ width: '25%', margin: '0 auto' }} />
        <h3 style={{ fontSize: '3.6rem' }}>
          Modern Styled React Component Modules
        </h3>
      </div>
    </div>
  )
}

export default Hero
