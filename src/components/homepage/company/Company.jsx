import React from 'react';
import './company.css';
import beneoshop from '../../../assets/company/1.png';
import caspio from '../../../assets/company/2.png';
import hypergrid from '../../../assets/company/3.png';
import leotrippi from '../../../assets/company/4.png';



const Company = () => {
    return (
        <div className='company'>
            <div className ='tittle-company'>
                <h2>You will be in good Company</h2>
            </div>
            <div className='company-image'>
                <img src={beneoshop} alt="" />
                <img src={caspio} alt="" />
                <img src={hypergrid} alt="" />
                <img src={leotrippi} alt="" />

                
            </div>
            
        </div>
    )
}

export default Company
