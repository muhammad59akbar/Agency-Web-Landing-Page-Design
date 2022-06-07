import React, {useState} from 'react';
import './work.css';
import data from './data-work';
import Button from './ButtonWork';
import {Link} from 'react-router-dom';

const allcategories = ['All', ...new Set(data.map(content=>content.category))];
// console.log(allcategories)

const Work = () => {

    const [menuitem,setMenuitem] = useState(data);
    const [buttons] = useState(allcategories);
  
    

    const filter = (button) =>{
        if(button ==='All'){
            setMenuitem(data);
            return;
        } 
     

        

        const filterdata = data.filter(content => content.category === button);
                  
              
        

        setMenuitem(filterdata)
        // console.log(filterdata)
    }

    return (

    <div className='work'>
        <div className='work-tittle'>
            <h3>Portfolio</h3>
            <h2>Latest Work</h2>
        </div>

        <Button button={buttons} filter={filter}  /> 

        <div className='work-item'>
            {menuitem.map((content) => {
                return (
                    <div className='work-item-card'  key={content.id}>
                        <div className='item-card-image'>
                            <img src={content.image} alt="" />
                        </div>
                        <div className='item-card-tittle'>
                            <h2>{content.tittle}</h2>
                        </div>
                        <div className='button-info'>
                            <div className='link-info'>
                                <Link to={content.link}>View More</Link>
                                
                            </div>
                        </div>
                        
                    </div>
                )
            })}

            
            
        </div>



    </div>
  )
};

export default Work;
