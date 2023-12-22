import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
      const location =useLocation();
    console.log(location);
    // const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('signup');
    const noHeaderFooter = location.pathname.includes('Login') || location.pathname.includes('signup');
    return (
        <div>
            
             {noHeaderFooter ||  <Navbar></Navbar>} 
            <Outlet></Outlet>
             {noHeaderFooter ||  <Footer></Footer>}  
           
        </div>
    );
};

export default MainLayout;