import React from 'react'
import './style.css'
const Headings = ({ paragraph, heading, classN }) => {
  return (
    <div className={classN?classN:'headings'}>
      <p>{paragraph?paragraph:null}</p>
      <h1>{heading?heading:null}</h1>
    </div>
  )
}

export default Headings