import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNavbar from '../../pages/Shared/LeftSideNavBar/LeftSideNavbar';

const CourseContent = () => {
    return (
        <div className='flex md:flex-row flex-col'>
            <div className='md:w-3/12 flex justify-center'>
                <LeftSideNavbar></LeftSideNavbar>
            </div>
            <div className='md:w-9/12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseContent;