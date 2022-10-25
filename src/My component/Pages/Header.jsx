import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="p-4 bg-gray-300 font-semibold dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link rel="noopener noreferrer" to='/' aria-label="Back to homepage" className="flex items-center p-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaKpA2Nuk0fcTu5ZTTUY0PBgXt33whGaENQ&usqp=CAU" className='w-7 h-7' alt="" />
        <h5 className='text-xl ml-2'>Programming Kit</h5>
        </Link>
       
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link rel="noopener noreferrer" to='/courses' className="flex items-center px-4 hover:border-orange-400 mb-1 border-b-2 dark:border-transparent">Courses</Link>
          </li>
          <li className="flex">
            <Link rel="noopener noreferrer" to='/blog' className="flex hover:border-orange-400 items-center px-4 mb-1 border-b-2 dark:border-transparent">Blog</Link>
          </li>
        
          <li className="flex">
            <Link rel="noopener noreferrer" to='/faq' className="flex items-center px-4 mb-1 border-b-2 dark:border-transparent hover:border-orange-400">FAQ</Link>
          </li>
    
            <li className="flex">
          <Link rel="noopener noreferrer" to='/login' className="flex items-center px-4 mb-1 border-b-2 dark:border-transparent hover:border-orange-400">Log In</Link>
        </li>
        <li className="flex ">
          <Link rel="noopener noreferrer" to='/signup' className="flex bg-red-500  items-center px-4 mb-1 border-b-2 dark:border-transparent hover:border-orange-400 text-white">Sign Up</Link>
        </li>
       
        
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          
        </button>
      </div>
    </header>
    );
};

export default Header;