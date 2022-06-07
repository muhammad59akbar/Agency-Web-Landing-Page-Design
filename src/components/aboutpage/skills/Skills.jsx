import React from 'react';
import './skills.css';
import data from './data-skills.js';

const Skills = () => {
    return (
        <div className='skills'>
            <div className='skills-content-name'>
                <div className='skills-tittle'>
                    <h2>Lorem Ipsum is simply dummy text of the printing. </h2>
                </div>
                <div className='skills-paragraph'>
                    <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.</p>     
                </div>
            </div>
            <div className='skills-item'>

                {data.map((content, id) => {
                    return (

                        <div key={id} className={content.item}>
                            <div className={content.backgroundimage}>
                                <img src={content.image} alt="" />
                            </div>
                            <div className='image-tittle'>
                                <h3>{content.tittle}</h3>
                            </div>
                    
                        </div>

                    )
                })}
                
                
            </div>
        </div>
    )
}

export default Skills
