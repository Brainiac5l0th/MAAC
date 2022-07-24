import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/style.css';
import Img from './images/tabletphone.png';
import './style.css';
const upperBodyHeading = () => {
  return (
    <section className='uppersection'>
      <div className='sectionWithBtn'>
        <h1 className='headingBold'>
          Analytics that transform your product inside-out
        </h1>
        <div className="btns">
          <button className='btn btnB btnLogin'>
            <Link to='#demo'>
              Request for Demo
            </Link>
          </button>
          <button className='btn btnB btnRegis'>
            <Link to='#download'>
              Download
            </Link>
          </button>
        </div>
      </div>
      <img src={Img} alt="phoneImg" className='tabletPhoneImg'/>
      <hr className='hrUpper'/>
    </section>
  )
}

export default upperBodyHeading