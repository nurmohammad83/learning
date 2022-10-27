import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/AuthContes";

const Header = () => {
  const { user, logOut } = useContext(MyContext);
  const [myStyle, setMyStyle]= useState({
    color:'white',
    backgroundColor:'black'
  })

const toggleHandel=()=>{
  if(myStyle.color === 'white'){
    setMyStyle({
      color:'black',
      backgroundColor:'white'
    })
  }else{
    setMyStyle({
      color:'white',
      backgroundColor:'black'
    })
  }
}
  const handelLogOut = () => {
    logOut()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <header style={myStyle} className="p-4  sm:text-xs md:text-lg md:font-semibold dark:text-gray-100">
      <div className="container flex justify-end md:justify-between h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="md:flex -my-1 items-center p-2"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaKpA2Nuk0fcTu5ZTTUY0PBgXt33whGaENQ&usqp=CAU"
            className="w-7 h-7"
            alt=""
          />
          <h5 className="md:text-xl ml-2">Programming Kit</h5>
        </Link>

        <ul className="items-stretch -my-1 flex-wrap  space-x-3 flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/courses"
              className="flex items-center px-4 hover:border-orange-400 mb-1 border-b-2 dark:border-transparent"
            >
              Courses
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/blog"
              className="flex hover:border-orange-400 items-center px-4 mb-1 border-b-2 dark:border-transparent"
            >
              Blog
            </Link>
          </li>

          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/faq"
              className="flex items-center px-4 mb-1 border-b-2 dark:border-transparent hover:border-orange-400"
            >
              FAQ
            </Link>
          </li>

          {user?.uid ? (
            <div className="flex">
              <Link
                onClick={handelLogOut}
                rel="noopener noreferrer"
                to=""
                className="flex items-center px-4 mb-1 border-b-2 dark:border-transparent hover:border-orange-400"
              >
                Sign Out
              </Link>
              <Link>
                <img 
                title={user.displayName ? user.displayName : 'Unknow'}
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt=""
                  className="w-12 h-12 hover: mx-auto rounded-full dark:bg-gray-500 aspect-square"
                />
              </Link>
            </div>
          ) : (
            <div className="flex">
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  to="/login"
                  className="flex items-center px-4 mb-1 border-b-2 dark:border-transparent hover:border-orange-400"
                >
                  Log In
                </Link>
              </li>
              <li className="flex ">
                <Link
                  rel="noopener noreferrer"
                  to="/signup"
                  className="flex mr-2 bg-red-500  items-center px-4 mb-1 border-b-2 dark:border-transparent hover:border-orange-400 text-white"
                >
                  Sign Up
                </Link>
                
              </li>
            </div>
          )}
          <label onClick={toggleHandel}
                  htmlFor="Toggle1"
                  className="inline-flex items-center space-x-4 cursor-pointer text-slate-800"
                >
                  <span className="relative">
                    <input
                      id="Toggle1"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                  </span>
                </label>
        </ul>
        
        {/* <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Header;
