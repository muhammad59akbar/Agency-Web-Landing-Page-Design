import React from 'react'
import Header from './header/Header';
import Describe from './describe/Describe';
import Description from './description/Description';
import Content from './content/Content';
import About from './about/About';
import Company from './company/Company';
import { PageTittle } from '../../GeneralFunctions';


const Home = () => {
    PageTittle('Home');
    return (
        <>
            <Header />
            
            <Describe />

            <Description />

            <Content />

            <About />

            <Company />

            
        </>
       
        
    )
}

export default Home
