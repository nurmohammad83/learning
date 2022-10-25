import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses);
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