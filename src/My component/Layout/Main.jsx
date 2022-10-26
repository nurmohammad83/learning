import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
export const CoursesContext = createContext()
const Main = () => {
    const loaderData = useLoaderData()
    return (
        <>
        <CoursesContext.Provider value={loaderData}>
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
        </CoursesContext.Provider>
     
        </>
    );
};

export default Main;