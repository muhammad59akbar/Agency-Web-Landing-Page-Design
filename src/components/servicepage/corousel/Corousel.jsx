import React, { useState, useEffect } from 'react';
import './corousel.css';
import { autoslide } from './data-corousel';
import Speaker from '../../../assets/images/Speaker.png'

const Corousel = () => {

    const [currentSlide, setCurrentSlide] = useState(1);

    const autoScroll = true;
    
    let slideindex;
    let intervaltime = 5000;


    const nextSlide = () => {
        if(currentSlide !== autoslide.length){
            setCurrentSlide(currentSlide + 1)
        } else if (currentSlide === autoslide.length){
            setCurrentSlide(1)
        }
    }

    function auto () {
        slideindex = setInterval(nextSlide,intervaltime);
    }

    useEffect(() => {
        setCurrentSlide(1);
    }, []);


    useEffect(() => {
        if(autoScroll) {
            auto();
        }
        return () => clearInterval(slideindex);
    });



   
    





  return (
      <div className='corousel'>
          <div className='corousel-content'>
              <div className='corousel-item-image'>
                  {autoslide.map((slide, index) => {
                      return (
                          <div className={currentSlide === index + 1 ? 'corousel-image active' : 'corousel-image'} key={index}>
                              <img src={slide.img} alt="" />
                          </div>
                      )
                  })}

              </div>
              <div className='corousel-content-item'>
                  <div className='corousel-image-tittle'>
                    <div className='frame-image'>
                        <img src={Speaker} alt="" />
                    </div>
                    <div className='tittle-corousel'>
                        <h2>Our <span>Service</span></h2>
                        <p>Lorem Ipsum dasdsa is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                  </div>
              </div>
          </div>
          
      </div>
  )
};

export default Corousel;
