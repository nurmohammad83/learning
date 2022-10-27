import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';




const SideNav = () => {
    const [courses, setCourses]= useState([])

    useEffect(()=>{

        fetch('https://programming-kit-server.vercel.app/courses')
        .then(res=> res.json())
        .then(data=>setCourses(data))

    },[])
    return (
        <div className='m-2'>
            <h6 className='text-2xl text-black font-semibold'>All Courses Here: {courses.length}</h6>
            <div className='p-5 w-[300px] text-xl my-2'  >
                {courses.map(course=> <p className='m-2 hover:bg-pink-600' key={course._id}>
                    <Link to={`/courses/${course._id}`}>{course.name}</Link>
                </p> )}
            </div>
        </div>
    );
                }

export default SideNav;