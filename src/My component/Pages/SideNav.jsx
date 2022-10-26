import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CoursesContext } from '../Layout/Main';



const SideNav = () => {
   const dataCourse = useContext(CoursesContext)
   console.log(dataCourse);
    return (
        <>
        <h2 className='text-2xl m-6 underline text-orange-400'>All Courses: </h2>
        <div className='m-8 '>
           {
            dataCourse.map(dataName=><p className='py-1 text-xl' key={dataName._id}>
                <Link to={`/courses/${dataName.courses_id}`}>{dataName.name}</Link>

            </p>)
           }
        </div>
        </>
    );
};

export default SideNav;