import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';

const Main = () => {
  
    return (
       
       
        <div>
            <Header/>
            <div className='md:flex'>
                <div className='md:w-[300px]  bg-slate-400 text-white'>
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