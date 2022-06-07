import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import people from '../../../assets/images/people.png';
import circle1 from '../../../assets/images/circle1.png';
import circle2 from '../../../assets/images/circle2.png';

const Header = () => {
    return (
        
        <div className='header'>
            <div className='header-content'>
                <div className='header-content-left'>
                    <div className='header-content-tittle'>
                        <h1>Experienced <span>mobile and web </span>application and website builders masturing</h1>
                        <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                        
                    </div>
                    <div className='header-content-button'>
                        <button className='button-contact'><Link to='/Contact'>Contact Us</Link></button>
                        <button className='button-viewmore'>View More</button>
                    </div>
                </div>
                <div className='header-content-right'>
                    <img src={people} alt="" />

                </div>
            </div>
            <div className='circle2'>
                <img src={circle2} alt="" />
            </div> 
            <div className='circle1'>
                <img src={circle1} alt="" />
            </div>
        </div>
        
    )
}

export default Header
