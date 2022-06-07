import React from 'react'
import Aboutus from './aboutus/Aboutus';
import Blog from './blog/Blog';
import Skills from './skills/Skills';
import Work from './work/Work';
import { PageTittle } from '../../GeneralFunctions';



const About = () => {
    PageTittle('About Page');
    return (
        <>
            <Aboutus />
            <Blog />
            <Skills />
            <Work />
            
            
        </>
    )
}

export default About
