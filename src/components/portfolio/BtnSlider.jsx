import React from 'react';
import './BtnSlide.css';



const BtnSlider = ({direction, moveSlide}) => {
  return (
     
        <button onClick={moveSlide} className={direction === "next" ? 'btn-next' : 'btn-prev'}>
        <i className={direction === "next" ? 'fas fa-chevron-circle-right fa-3x' 
        : 'fas fa-chevron-circle-left fa-3x'}></i>
        </button>
      
  )
};

export default BtnSlider;