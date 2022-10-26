import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../Login/Login";

import SignUp from "../Login/SignUp";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import CoursesDetails from "../Pages/CoursesDetails";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";
import SideNav from "../Pages/SideNav";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        loader:()=> fetch('http://localhost:5000/courses'),
        children:[
            {
                path:'/courses/:id',
                element:<PrivetRoute><Courses/></PrivetRoute>,
                loader:({params})=> fetch(`http://localhost:5000/courses-name${params.id}`)
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
                path:'/side',
                
                element:<SideNav/>,
               
            },
            {
                path:'/details/:id',
                loader:({params})=> fetch(`http://localhost:5000/courses${params.id}`),
                element:<CoursesDetails/>,
               
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