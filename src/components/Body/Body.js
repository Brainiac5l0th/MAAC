import React from 'react';
import AboutUs from './about/AboutUs';
import Faq from './FAQ/Faq';
import LastSection from './LastSection';
import ProductsFeatures from './productfeature/ProductsFeatures';
import UpperBodyHeading from './UpperBodyHeading';
const Body = () => {
  return (
    <>
      <UpperBodyHeading />
      <ProductsFeatures/>
      <AboutUs/>
      <Faq/>
      <LastSection/>
    </>
  )
}

export default Body