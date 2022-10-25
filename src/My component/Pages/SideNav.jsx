import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SideNav = () => {
    const courseName = useLoaderData([])
    console.log(courseName);
    return (
        <div className='inline-block'>
            {
                courseName.map(name => <div>
                  <li>{name.name}</li>
                </div>)
            }
        </div>
    );
};

export default SideNav;