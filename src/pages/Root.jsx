import React from 'react';
import { Outlet } from 'react-router-dom';
import Register from '../share/Register';
import Login from '../share/Login';
import NavBar from '../components/NavBar';


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='bg-yellow-50'>Tanvir</h1>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;