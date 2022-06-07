import React from 'react';
import './content.css';
import happy from '../../../assets/images/happy.png';
import blur from '../../../assets/bg/blur.png';
import blur1 from '../../../assets/bg/blur1.png';
import dots from '../../../assets/bg/dots.png';
import data from './data-boddy.js';

const Content = () => {
    return (
        <div className='content'>

            {data.map((content, id) => {
                return (
                <div key={id}>
                
                    <div className={content.class}>

                        <div className='content-tittle'>
                            <div className='content-tittle-header'>
                                <div className={content.tittleimage}>
                                    <img src={happy} alt="" />   
                                </div>
                                <div className='content-tittle-1'>
                                    <h4>Lorem Ipsum is simply dummy text</h4>
                                    <p>Lorem Ipsum is simply dummy text</p>       
                                </div>
                            </div>
                            <div className='content-tittle-boddy'>
                                <h3><span>Lorem Ipsum</span> is simply dummy text of the printing. </h3>
                            </div>
                            <div className='content-tittle-boddy-p'>
                                <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>                                
                            </div>

                        </div>

                        <div className='content-img'>
                            <img src={content.contentimage} alt="" />
                        </div> 
                    
                    </div>
                </div>

                )
            })}



            <div className='dots'>
                <img src={dots} alt="" />
                
            </div>
            

            <div className='blur-item'>
                <img src={blur} alt="" />
            </div>
            <div className='blur-item-1'>
                <img src={blur1} alt="" />
                
            </div>

            

        </div>
    )
}

export default Content
