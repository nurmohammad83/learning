import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CoursesContext } from '../Layout/Main';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData([])
    return (
        <div className='grid grid-cols-2 gap-5 w-full p-12'>
           
        {
           courses.map(course=><Course
           key={course._id}
           course={course}
           />)
        }
       
</div>
    );
};

export default Courses;