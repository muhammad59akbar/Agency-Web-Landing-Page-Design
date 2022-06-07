import React, { useState } from 'react';
import './portfolio.css';
import { info } from './data-portfolio';
import BtnSlider from './BtnSlider';
import { PageTittle } from '../../GeneralFunctions';




const PortfolioFourth = () => {
    PageTittle('Portfolio 4');


    const [CurrentSlide, setCurrentSlide] = useState(1);

    const NextSlide = () => {
        if(CurrentSlide !== info.length){
            setCurrentSlide(CurrentSlide + 1 )
        } else if (CurrentSlide === info.length){
            setCurrentSlide(1)
        }

    }


    const PrevSlide = () => {
        if(CurrentSlide !== 1){
            setCurrentSlide(CurrentSlide - 1 );
        } else if ( CurrentSlide === 1 ){
            setCurrentSlide(info.length)
        }

    }


    const moveDots = index => {
        setCurrentSlide(index)
    }






  return (


      <div className='portfolio-fourth'>
          <div className='portfolio-content-item'>
              <div className='tittle'>
                  <h1>My Presentation</h1>
              </div>

              <div className='portfolio-content'>
                  {info.map((slide, index) => {
                      return (
                          <div className={CurrentSlide === index + 1 ? 'portfolio-frame-first active' : 'portfolio-frame-first'} key={index}>
                              <img src={slide.img} alt="" />
                          </div>
                      )
                  })}
                  
                  <BtnSlider moveSlide={NextSlide} direction={'next'} />
                  <BtnSlider moveSlide={PrevSlide} direction={'prev'} />

              </div>

              <div className='container-dots'>
                  {Array.from({length : 6}).map((dots, index) => {
                      return(
                          <div className='dots-key' key={index}>
                              <div onClick={() => moveDots(index + 1)} className={CurrentSlide === index + 1 ? 'dots-item active' : 'dots-item'}></div>
                          </div>
                      )
                  }) }
              </div>


          </div>
          
      </div>
  )
};

export default PortfolioFourth;
