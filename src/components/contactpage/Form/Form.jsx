import React from 'react';
import './form.css'

// if you want use react-emailjs

// import React, {useRef} from 'react';
// import emailjs from '@emailjs/browser';

const Form = () => {
  // const form = useRef();

  // const SendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_n9o0cr9', 'template_bmf4lkb', form.current, 'user_N140sqGvuuceRnrKjG8k7')
  //     .then((result) => {
  //       alert('Thank You For Sending a Message');
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();
  // };  



    // function SendEmail(e){
    //     e.preventDefault();
        

    //     // service templates and integration
    //     emailjs.sendForm('service_n9o0cr9', 'template_bmf4lkb', e.target, 
    //     'user_N140sqGvuuceRnrKjG8k7').then(res =>{
    //         alert('Thank You For Sending a Message');
    //         console.log(res);
    //         // for reset form
    //         e.target.reset();

    //     }).catch(err => console.log(err));
    // }


  return (
      <div className='Form'>

          <h2>Say hello</h2>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>

          <form className='form-item'>
          <div className='Form-Row'>
              <div className='Form-FirstName'>
                <label htmlFor="FirstName">First Name</label>
                <input type="text" name='FirstName' required />
              </div>
              <div className='Form-LastName'>
                <label htmlFor="LastName">Last Name</label>
                <input type="text" name='LastName' required />
              </div>
              
          </div>
          <div className='Form-Email'>
              <label htmlFor="Email"> Email Address</label>
              <input type="text" name='Email' required />
          </div>
          <div className='Form-Message'>
             <label htmlFor="Message">Message</label>
            <textarea type="text" name='Message' required />
          </div>
          <div className='button-form-item'>
            <button type='submit' className='button-form'> Get in Touch </button>
          </div>
          </form>
          
          
        </div>
  )
};

export default Form;
