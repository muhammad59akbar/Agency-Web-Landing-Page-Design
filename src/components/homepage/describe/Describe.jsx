import React from 'react';
import './describe.css';
import { data } from './datadesc.js';

const Describe = () => {


    return (
        <div className='describe'>

            {data.map((desc, id) => {
                return(

                    <div key ={id}> 
                    <div className='describe-content'>
                    
                        <div className={desc.descimage}>
                            <img src={desc.image} alt="" />
                        </div>
                        <div className='tittle-skills'>
                            <h3>{desc.tittle}</h3>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                    </div>
                </div>
                )
            })}

            
        </div>

    )
}

export default Describe
