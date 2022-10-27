import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCloudDownloadAlt } from "react-icons/fa";

import { createRef } from 'react';
import Pdf from "react-to-pdf";
const CheckOut = () => {
    const ref  =createRef()
    const user =useLoaderData([])
 console.log(user);
    return (
        <div className='m-5'>
           
            <div className="">
      <Pdf  targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <FaCloudDownloadAlt className='w-8 h-9' onClick={toPdf}></FaCloudDownloadAlt>}
      </Pdf>
      <div ref={ref}>
      <h1 className='text-lg font-semibold py-4'>{user.name}</h1>
            <p className='my-3'><span className='text-lg font-medium'>Course Id :</span> {user._id}</p>
            <img className='md:w-[500px] w-96' src={user.picture} alt="" />
            <p className='py-3'>{user.des}</p>
      </div>
    </div>
        </div>
    );
};

export default CheckOut;