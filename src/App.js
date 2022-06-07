import React from 'react';
import './App.css';
import {Navbar, Search, PortfolioFirst, PortfolioSecond, PortfolioThird, PortfolioFourth, Footer } from './components';
import Home from './components/homepage/Home';
import About from './components/aboutpage/About';
import Service from './components/servicepage/Service';
import Contact from './components/contactpage/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollTopRoute } from './GeneralFunctions';


export const App = () => {
    return (


    <BrowserRouter>
        <ScrollTopRoute />
        <Navbar />
            
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/PortfolioFirst" element={<PortfolioFirst />} />
          <Route path="/PortfolioSecond" element={<PortfolioSecond />} />
          <Route path="/PortfolioThird" element={<PortfolioThird />} />
          <Route path="/PortfolioFourth" element={<PortfolioFourth />} />

        </Routes>

        <Search />
        <Footer />




    

            

    </BrowserRouter>
    )
}
export default App
