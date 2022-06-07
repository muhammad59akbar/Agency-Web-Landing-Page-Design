import React from 'react';
import './about.css';
import {Link} from 'react-router-dom';
import data from './dataabout.js';
import bell from '../../../assets/bg/Bell.png';

const About = () => {
    return (
        <div className='section-about'>
            {data.map((content, id) => {
                return (
                    <div key={id}>
                    
                        <div className={content.class}>
                            <div className='about-tittle'>
                                <h2>Lorem Ipsum is simply dummy text.</h2>
                            </div>
                            <div className='about-paragraph'>
                                <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                            </div>
                            <button className={content.btnclass}><Link to = '/About'>View More</Link></button>
                        </div>
                    </div>

                )
            })}
            <div className='bell'>
                <img src={bell} alt="" />
                
            </div>
            
        </div>
    )
}

export default About
