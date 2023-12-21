import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;