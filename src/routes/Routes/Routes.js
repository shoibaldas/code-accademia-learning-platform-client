import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CourseContent from '../../layout/CourseContent/CourseContent';
import Main from '../../layout/Main/Main';
import Blog from '../../pages/Blog/Blog';
import CourseDetails from '../../pages/CourseDetails/CourseDetails';
import Courses from '../../pages/Courses/Courses';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SignUp/SignUp';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <CourseContent></CourseContent>,
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>,
                        loader: () => fetch('http://localhost:5000/category-courses')
                    },
                    {
                        path: "/course/:id",
                        element: <CourseDetails></CourseDetails>,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
                    }
                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }

])