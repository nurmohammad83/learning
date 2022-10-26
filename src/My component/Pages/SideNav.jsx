import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';




const SideNav = () => {
    const [courses, setCourses]= useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/courses')
        .then(res=> res.json())
        .then(data=>setCourses(data))

    },[])
    return (
        <div className='m-2'>
            <h6 className='text-2xl text-orange-500'>All Categories Here: {courses.length}</h6>
            <div className='p-5 w-[300px] text-xl my-2'  >
                {courses.map(course=> <p className='m-2' key={course._id}>
                    <Link to={`/courses/${course._id}`}>{course.name}</Link>
                </p> )}
            </div>
        </div>
    );
                }

export default SideNav;