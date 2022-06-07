import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { datamedsos } from '../contactpage/contactperson/data-medsos';

const Footer = () => {
  return (
      <div className='footer'>
          <div className='footer-row'>
              <div className='footer-description'>
                  <h4>LOGO</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className='footer-about'>
                  <h4>About us</h4>
                  <div className='footer-link'>
                      <Link to='/PortfolioFirst'>Portfolio 1</Link>
                      <Link to='/PortfolioSecond'>Portfolio 2</Link>
                      <Link to='/PortfolioThird'>Portfolio 3</Link>
                      <Link to='/PortfolioFourth'>Portfolio 4</Link>

                  </div>
              </div>
              <div className='footer-contact'>
                  <h4>Contact us</h4>
                  <p>Jln Kp irian Kemayoran Jakarta Pusat</p>
                  <p>081280259432</p>
              </div>

              <div className='footer-sosmed'>
                  {datamedsos.map((content, id) => {
                      return(
                          <div className='background-medsos' key={id}>
                              <a href={content.linkprofile}><i className={content.icon}></i></a>
                          </div>
                      )
                  })}
              </div>
          </div>
          <div className='footer-copyright'>
              <p>Copyright &copy; 2022 Slicing By Muhammad Rizki Akbar</p>
          </div>
      </div>
  )
};

export default Footer;
