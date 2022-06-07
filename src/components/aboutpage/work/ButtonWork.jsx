import React from 'react';

const ButtonWork = ({button ,filter}) => {


  


  return (
      <div className='button-filter'>
        {button.map((option) =>{
          return(
            <button type='button' onClick={()=> filter(option)} key={option} className='button-item'>{option}</button>
          )
        })}
        
      </div>
  )
};

export default ButtonWork;
