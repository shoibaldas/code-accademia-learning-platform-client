import React from 'react';
import LeftSideNavbar from '../Shared/LeftSideNavBar/LeftSideNavbar';

const Courses = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='w-3/12'>
                <LeftSideNavbar></LeftSideNavbar>
            </div>
            <div className='w-/12 text-center'>
                <h1>sdkokgs</h1>
            </div>

        </div>
    );
};

export default Courses;