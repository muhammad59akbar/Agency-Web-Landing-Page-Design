import React from 'react';
import Corousel from './corousel/Corousel';
import Details from './details/Details';
import Contactservice from './contact_service/Contact_service';
import { PageTittle } from '../../GeneralFunctions';



const Service = () => {
  PageTittle('Service Page');
  return (
    <>
    <Corousel />
    <Details />
    <Contactservice />
    
    
    
    </>
      
  )
};

export default Service;
