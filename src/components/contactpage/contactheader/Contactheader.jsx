import React from 'react';
import './contactheader.css';
import beverly from '../../../assets/images/Beverly.png';
import location from '../../../assets/bg/location.png';

const Contactheader = () => {
  return (
      <div className='contact-header'>
          <div className='contact-item-left'>
              <div className='item-image-contact'>
                  <img src={beverly} alt="" />
              </div>
              <div className='item-tittle-paragraph'>
                  <h1>Lets Collaborate</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing .</p>
              </div>
          </div>
          <div className='contact-item-right'>
              <img src={location} alt="" />

          </div>

      </div>
  )
};

export default Contactheader;
