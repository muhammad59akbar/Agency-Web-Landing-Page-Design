import React from 'react';
import { PageTittle } from '../../GeneralFunctions';
import ContactHeader from './contactheader/Contactheader';
import Contactperson from './contactperson/Contactperson';
import Form from './Form/Form';

const Contact = () => {
  PageTittle('Contact Us');
  return(
      <>
        <ContactHeader />
        <Contactperson />
        <Form />
      </>
  )
};

export default Contact;
