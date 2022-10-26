import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Side = () => {
    const singleDetails = useLoaderData([])
    const {name,des,picture,_id}= singleDetails
    return (
        <div className="md:w-[500px] m-4 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                <p className="dark:text-gray-100">{des}</p>
            </div>
            <Link to={`/checkout/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Get Access Premium</button></Link>
        </div>
    </div>
    );
};

export default Side;