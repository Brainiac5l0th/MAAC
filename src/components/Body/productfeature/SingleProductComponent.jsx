import React from 'react';
import Logo from '../images/productLogo.svg';
const SingleProductComponent = ({heading, para}) => {
  return (
    <div className="singleProduct">
        <img src={Logo} alt="product logo" />
        <h3>{heading}</h3>
        <p>{para}</p>
    </div>

    
  )
}

export default SingleProductComponent