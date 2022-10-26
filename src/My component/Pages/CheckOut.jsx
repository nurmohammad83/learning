import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const user =useLoaderData([])
 console.log(user);
    return (
        <div className='m-5'>
            <h1 className='text-lg font-semibold py-4'>{user.name}</h1>
            <img className='md:w-[500px] w-96' src={user.picture} alt="" />
            <p className='py-3'>{user.des}</p>
        </div>
    );
};

export default CheckOut;