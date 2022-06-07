import React from 'react';
import './contactperson.css';
import imagephone from '../../../assets/icons/phone.png';
import imagegps from '../../../assets/icons/gps.png';
import line from '../../../assets/bg/Line.png';
import { datamedsos } from './data-medsos';


const Contactperson = () => {

  return(
      <div className='contact-person-item'>
          <div className='media-sosial'>
              <span>Follow Us</span>
              <div className='medsos-link-item'>
                  {datamedsos.map((content, index) => {
                      return(
                          <div className='background-medsos' key={index}>
                              <a href={content.linkprofile}><i className={content.icon}></i></a>
                          </div>
                      )
                  })}

              </div>
              

          </div>
          <div className='number-phone'>
              <div className='frame-number-phone'>
                  <img src={imagephone} alt="" />
              </div>
              <span>081280259432 <br></br> 081323848971</span>
              


          </div>
          <div className='location'>
              <div className='frame-location'>
                  <img src={imagegps} alt="" />
              </div>
              <span>Jln Kp irian Kemayoran Jakarta Pusat</span>

          </div>
          <div className='line-item-contact1'>
              <img src={line} alt="" />
          </div>

          <div className='line-item-contact2'>
              <img src={line} alt="" />
          </div>
          
      </div>
  )
};

export default Contactperson;
