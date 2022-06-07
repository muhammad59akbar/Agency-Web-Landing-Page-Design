import React from 'react';
import './contact_service.css';
import itemimage from '../../../assets/bg/service1.png';
import {Link} from 'react-router-dom';

const contact_service = () => {
  return (
      <div className='service-contact'>
          <div className='service-contact-item'>
              <div className='service-item-tittle-paragraph'>
                  <div className='service-item-tittle'>
                    <h1><span>Lorem Ipsum</span> is simply dummy text of the printing. </h1>
                  </div>
                  <div className='service-item-paragraph'>
                      <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                      <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens </p>
                  </div>
                  <button className='contact-us-service'><Link to='/Contact'>Contact Us</Link></button>
              </div>
              <div className='service-item-image'>
                  <img src={itemimage} alt="" />
              </div>
          </div>
      </div>
  )
};

export default contact_service;
