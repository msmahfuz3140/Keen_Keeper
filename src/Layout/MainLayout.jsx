import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer/Footer';

const MainLayout = () => {
    return (
        <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        
        
        </>
    );
};

export default MainLayout;