import React from 'react';
import Img from '../images/productImg.png';
import SingleProductComponent from './SingleProductComponent';
const Products = () => {
    return (
        <div className='products'>
            <div className="product leftsideProduct">
                <SingleProductComponent heading={'Real-time analytics'} para={'See product usage, sign-ins, feature metrics change as users work on your.'} />
                <SingleProductComponent heading={'Intuitive dashboard'} para={'See product usage, sign-ins, feature metrics change as users work on your.'} />
                <SingleProductComponent heading={'Smart suggestions'} para={'See product usage, sign-ins, feature metrics change as users work on your.'} />
            </div>
            <img src={Img} alt="product central phone" />
            <div className="product rightsideProduct">
                <SingleProductComponent heading={'Multiple views'} para={'See product usage, sign-ins, feature metrics change as users work on your.'} />
                <SingleProductComponent heading={'AI-led diagnoses'} para={'See product usage, sign-ins, feature metrics change as users work on your.'} />
                <SingleProductComponent heading={'Responsive'} para={'See product usage, sign-ins, feature metrics change as users work on your.'} />
            </div>
        </div>
    )
}

export default Products