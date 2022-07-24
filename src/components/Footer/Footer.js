import React from 'react';
import { Link } from 'react-router-dom';
import facebook from './facebook.png';
import Logo from './footer.png';
import linkedin from './linkedin.png';
import './style.css';
import twitter from './twitter.png';
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='divMaxWid'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.</p>
          <div className='logoGroup'>
            <a href='https://maacsolutions.com/' target='_blank' rel="noreferrer">
              <img src={twitter} alt='twitter' />
            </a>
            <a href='https://maacsolutions.com/' target='_blank' rel="noreferrer">
              <img src={linkedin} alt='linkedin' />
            </a>
            <a href='https://maacsolutions.com/' target='_blank' rel="noreferrer">
              <img src={facebook} alt='facebook' />
            </a>
          </div>
        </div>
        <hr className='hrCss' />
        <p className='rightReserve'>© All rights reserve by <span className='maacName'>
          <a href='https://maacsolutions.com/' target='_blank' rel="noreferrer">MAAC</a></span></p>
    </footer>
  )
}

export default Footer