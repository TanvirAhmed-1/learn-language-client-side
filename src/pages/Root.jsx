import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='bg-yellow-50'>Tanvir</h1>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;