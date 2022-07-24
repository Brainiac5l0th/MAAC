import React from 'react';
import Headings from '../../utiliti/Headings';
import '../style.css';
import Products from './Products';
const ProductsFeatures = () => {
  return (
    <section className='productFeature container'>
        <Headings paragraph={'Products Features'} heading={'Make more out of your data'}/>
        <Products />
    </section>
  )
}

export default ProductsFeatures