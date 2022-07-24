import React from 'react';
import '../style.css';
import UpperPart from './UpperPart';
import Lowerpart from './Lowerpart';
const AboutUs = () => {
  return (
      <div className='aboutUs container'>
        <div className='upperAbout'>
          <UpperPart />
        </div>
        <div className='lowerAbout'>
          <Lowerpart />
        </div>
      </div>
  )
}

export default AboutUs