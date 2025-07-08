import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const Homelayout = () => {
    return (
        <div className='mont bg-black max-w-full md:max-w-[1440px] lg:max-w-[1519px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;