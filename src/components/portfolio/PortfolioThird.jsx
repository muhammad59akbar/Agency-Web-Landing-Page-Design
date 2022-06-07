import React, { useState } from 'react';
import './portfolio.css';
import {port3} from './data-portfolio';
import BtnSlider from './BtnSlider';
import { PageTittle } from '../../GeneralFunctions';





const PortfolioThird = () => {
    PageTittle('Portfolio 3');

    const [currendSlide, setCurrentSlide] = useState(1)


    const NextSlide = () => {
        if(currendSlide !== port3.length){
            setCurrentSlide(currendSlide + 1)
        } else if (currendSlide === port3.length){
            setCurrentSlide(1)
        }

    }

    const PrevSlide = () => {
        if(currendSlide !== 1 ){
            setCurrentSlide(currendSlide - 1)
        } else if (currendSlide === 1 ){
            setCurrentSlide(port3.length)
        }

    }


    const moveDots = index => {
        setCurrentSlide(index)

    }



  return(


      <div className='Portfolio-Third'>
          <div className='portfolio-content-item'>
              <div className='tittle'>
                  <h1>Portfolio Kedua</h1>
              </div>

              <div className='portfolio-content'>
                  {port3.map((slide, index) => {
                      return(
                          <div className={currendSlide === index + 1 ? 'portfolio-frame-first active' : 'portfolio-frame-first'} key={index}>
                              <img src={slide.img} alt="" />
                          </div>
                      )
                  })}

                  <BtnSlider moveSlide={NextSlide} direction={'next'} />
                  <BtnSlider moveSlide={PrevSlide} direction={'prev'} />

              </div>


              <div className='container-dots'>
                  {Array.from({length: 9}).map((slide, index) => {
                      return(
                          <div className='dots-key' key={index}>
                              <div onClick={() => moveDots(index + 1 )} className={currendSlide === index + 1 ? 'dots-item active' : 'dots-item'}></div>
                          </div>
                      )
                  })}
              </div>



          </div>
      </div>
  )
};

export default PortfolioThird;
