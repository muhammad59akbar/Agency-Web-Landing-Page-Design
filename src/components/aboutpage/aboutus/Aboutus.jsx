import React from 'react';
import './aboutus.css';
import image1 from '../../../assets/images/image-about1.png';
import image2 from '../../../assets/images/image-about2.png';
import image3 from '../../../assets/images/image-about3.png';
import image4 from '../../../assets/images/image-about4.png';
import circle1 from '../../../assets/bg/circle-about11.png';
import circle2 from '../../../assets/bg/circle-about22.png';

const Aboutus = () => {
    return (
        <div className='aboutus'>
            <div className='aboutus-img'>
                <img src={image1} alt="" className='img1' />
                <img src={image2} alt="" className='img2' />
                <img src={image3} alt="" className='img3' />
                
            </div>
            <div className='aboutus-head'>
                <h4>About us</h4>
                <div className='aboutus-tittle'>
                    <h2>Lorem Ipsum is simply dummy text of the printing.</h2>
                </div>
                <div className='aboutus-paragraph'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    
                </div>
                <div className='aboutus-tittle-image'>
                    <img src={image4} alt="" />

                    
                </div>

                
            </div>

            <div className='about-circle1'>
                <img src={circle1} alt="" />
            </div>

            <div className='about-circle2'>
                <img src={circle2} alt="" />
                
            </div>

        </div>
    )
}

export default Aboutus
