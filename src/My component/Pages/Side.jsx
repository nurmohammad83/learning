import React from 'react';
import { Link } from 'react-router-dom';

const Side = ({dataName}) => {
    return (
        <div className='py-2 text-2xl'>
            <Link>{dataName.name}</Link>
        </div>
    );
};

export default Side;