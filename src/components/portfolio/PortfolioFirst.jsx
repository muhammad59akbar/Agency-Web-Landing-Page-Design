import React,{ useState } from 'react';
import './portfolio.css';
import {port1} from './data-portfolio.js';
import BtnSlider from './BtnSlider';
import { PageTittle } from '../../GeneralFunctions';


const PortfolioFirst = () => {
  PageTittle('Portfolio 1');


  const [currentSlide, setCurrentSlide] = useState(1);
  
  const NextSlide = () => {
    if(currentSlide !== port1.length){
      setCurrentSlide(currentSlide+1)
    } else if (currentSlide === port1.length){
      setCurrentSlide(1)
    }

  }
  

  const PrevSlide = () => {
    if(currentSlide !==1){
      setCurrentSlide(currentSlide - 1)
    } else if (currentSlide === 1){
      setCurrentSlide(port1.length)
    }

  }

  const moveDots = index => {
    setCurrentSlide(index)

  }



  return (
      <div className='portofolio-first'>
        <div className='portfolio-content-item' >
          <div className='tittle'>
            <h1>Portfolio Pertama</h1>
          </div>
          <div className='portfolio-content'>
            
          
          {port1.map((slide, index) => {
            return (
              <div className={currentSlide === index + 1 ?'portfolio-frame-first active' 
              : 'portfolio-frame-first' } key={index}>
                <img src={slide.img} alt=""/>
              </div>
            )
          })}
          <BtnSlider moveSlide={NextSlide} direction={'next'} />
          <BtnSlider moveSlide={PrevSlide} direction={'prev'} />
          </div>

          <div className='container-dots'>
            {Array.from({length:4}).map((dots,index) => {
              return (
                <div className='dots-key' key={index}>
                  <div onClick={()=> moveDots(index +1)} className={currentSlide === index + 1 ? 'dots-item active' : 'dots-item'}></div> 
                  
                </div>
              )
            }) }
            
          </div>


        </div>
      </div>
  )
};

export default PortfolioFirst;
