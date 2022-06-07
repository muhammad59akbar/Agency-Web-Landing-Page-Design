import React, {useRef} from 'react';
import './search.css';
import pai from '../../assets/bg/Pai.png';
import star from '../../assets/bg/Star.png';
import emailjs from '@emailjs/browser';

const Search = () => {

    const subs = useRef();
    const subscribe = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ay368zn', 'template_g5n7s8k', subs.current, 'user_N140sqGvuuceRnrKjG8k7')
      .then((result) => {
          alert('Thanks For Your Subscribe Check Your Email For More Information');
         
      }, (error) => {
          console.log(error);
      });
      e.target.reset();
  };

    



    return (
        <div className='search'>
            <div className='search-tittle'>
                <h2>Lorem Ipsum is simply dummy text of the printing. </h2>
            </div>
            <div className='search-item'>
                <form className='search-item' ref={subs} onSubmit={subscribe}>
                    <input type='text' name='subsmail' placeholder='Enter your email' required />
                    <button type='submit' className='btn-search'>SUBSCRIBE</button>
                </form>
            </div>

            <div className='pai'>
                <img src={pai} alt="" />
            </div>

            <div className='star'>
                <img src={star} alt="" />
                
            </div>

        </div>
    )
}

export default Search
