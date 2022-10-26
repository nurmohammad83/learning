import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../Login/Login";

import SignUp from "../Login/SignUp";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";
import Side from "../Pages/Side";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Courses/>,
                loader:()=> fetch(`http://localhost:5000/courses`)
            },
            {
                path:'/courses',
                element:<Courses/>,
                loader:()=> fetch(`http://localhost:5000/courses`)
            },
            {
                path:'/courses/:id',
                element:<Side/>,
                loader:({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
            },
            
           
            {
                path:'/blog',
                element:<Blog/>,
            },
            {
                path:'/faq',
                element:<Faq/>,
            },
            {
                path:'/login',
                element:<LogIn/>,
            },
            {
                path:'/signup',
                element:<SignUp/>,
            },
        ]

    }
])

export default router;