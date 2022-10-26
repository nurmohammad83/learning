import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { MyContext } from '../Context/AuthContes';

const PrivetRoute = ({children}) => {


  const {user,loading}= useContext(MyContext)
        const location = useLocation()
    
        if(loading){
            <div>Loading</div>
        }
        if(user && user.uid){
            return children
        }
        return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default PrivetRoute;