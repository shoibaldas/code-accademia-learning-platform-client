import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CourseContent from '../../layout/CourseContent/CourseContent';
import Main from '../../layout/Main/Main';
import Blog from '../../pages/Blog/Blog';
import ConfirmationPage from '../../pages/ConfirmationPage/ConfirmationPage';
import CourseDetails from '../../pages/CourseDetails/CourseDetails';
import Courses from '../../pages/Courses/Courses';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import FaqPage from '../../pages/FaqPage/FaqPage';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import About from '../../pages/About/About';
import SignUp from '../../pages/SignUp/SignUp';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <CourseContent></CourseContent>,
                errorElement: <ErrorPage></ErrorPage>,
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>,
                        loader: () => fetch('https://code-accademia-server.vercel.app/category-courses')
                    },
                    {
                        path: "/course/:id",
                        element: <CourseDetails></CourseDetails>,
                        loader: ({ params }) => fetch(`https://code-accademia-server.vercel.app/course/${params.id}`)
                    },
                ]
            },
            {
                path: '/faq',
                element: <FaqPage></FaqPage>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/course/:id/checkout',
                element: <PrivateRoutes><ConfirmationPage></ConfirmationPage></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://code-accademia-server.vercel.app/course/${params.id}`)
            }
        ]
    }

])