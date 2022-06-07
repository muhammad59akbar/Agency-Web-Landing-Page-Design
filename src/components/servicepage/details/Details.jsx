import React from 'react';
import './details.css';
import data from '../../aboutpage/skills/data-skills'
import markisa from '../../../assets/bg/markisa.png';

const Details = () => {
  return(
      <div className='details-info'>
          <div className='details-content'>
              {data.map((content, index) => {
                  return (
                      <div className='content-item' key={index}>
                          <div className={content.backgroundimage}>
                              <img src={content.image} alt="" />
                          </div>
                          <div className='details-tittle'>
                              <h2>{content.tittle}</h2>
                              <p>{content.paragraph}</p>
                          </div>
                              

                        
                      </div>
                  )
              })}

              
          </div>

          <div className='bg-details'>
              <img src={markisa} alt="" />
          </div>

      </div>
  )
};

export default Details;
