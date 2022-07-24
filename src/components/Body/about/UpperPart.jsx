import React from 'react';
import Headings from '../../utiliti/Headings';
import Logo from '../images/about.png';
import CeoImg from '../images/ceo.png';

const UpperPart = () => {
    return (<>
        <img src={Logo} alt="About us" />
        <div className="rightsideAbout">
            <Headings paragraph={'About Us'} heading={'A dedicated solution for startups and enterprises'} classN={'aboutHeading'} />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <hr className='hrAbout' />
            <div className='rightsideLower'>
                <img src={CeoImg} alt="vector" />
                <div className='ceoTalk'>
                    <p>"Fieldx is for teams that care about their product growth."</p>
                    <h5>CEO, FieldX</h5>
                </div>
            </div>
        </div>
    </>
    )
}

export default UpperPart