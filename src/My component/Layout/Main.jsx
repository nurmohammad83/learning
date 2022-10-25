import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';

const Main = () => {
    return (
        <div>
            <Header/>
            <div className='flex'>
                <div className='w-96'>
                   <SideNav/> 
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Main;