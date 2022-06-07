import React, {useState, useEffect} from 'react';
import './navbar.css';
import LOGO from '../../assets/images/LOGO.png'; 
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    const [navbar, Click] = useState (false);
    const handleClick = () => Click(!navbar);


    // const [sticky,setSticky] = useState(false);

    // const changebgnav = () => {
    //     if(window.scrollY > 120){
    //         setSticky(true);
    //     } else {
    //         setSticky(false);
    //     }
    // };

    // window.addEventListener('scroll', changebgnav);

    const [bgnavbar, SetNavbar] = useState (false);
    const changebg = () => {
        if( window.scrollY > 120 ){
            SetNavbar (true);
        } else {
            SetNavbar (false);
        } 
    }

    useEffect (() => {
        changebg ()
        window.addEventListener('scroll', changebg)
    })


    
    return (
        <div className={bgnavbar ? 'navbar bgdark' : 'navbar'}>
            <img src={LOGO} alt="logo" className='navbar-logo'  />
            <div className='navbar-content'>
                <ul className= {navbar ?'navbar-content-list mobile-nav':'navbar-content-list' }>
                    <li className='navbar-content-item'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='navbar-content-item'>
                        <NavLink to="/About">About Us</NavLink>
                    </li>
                    <li className='navbar-content-item'> 
                        <NavLink to="/Service">Service</NavLink>
                    </li>
                    <li className='navbar-content-item'>
                        <NavLink to="/Contact">Contact Us</NavLink> 
                    </li>
                </ul>
            </div>
            <div className='icon' id='icon' onClick = {handleClick}>
				<i className="fas fa-bars"></i>
			</div>
        </div>
    )
}

export default Navbar
