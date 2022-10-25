import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaShareAlt, FaBookmark, FaStar, FaEye } from "react-icons/fa";
import { BiTimer } from 'react-icons/bi';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0" >
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4  sm:grid-cols-2" >
                {
                    courses.map(course =>


                        <div
                            key={course._id}
                            href="/"
                            aria-label="View Item"
                            className="inline-block overflow-hidden duration-300 transform bg-base-100 rounded shadow-lg hover:-translate-y-2"
                        >
                            <div className="flex flex-col h-full">
                                <img
                                    src={course.picture}
                                    className="object-cover w-full h-48"
                                    alt=""
                                />
                                <div className="flex-grow border border-t-0 rounded-b">
                                    <div className="p-5">
                                        <h3 className="mb-2 text-start text-2xl font-semibold dark:text-gray-200 leading-5">
                                            {course.name}
                                        </h3>
                                        <div className="flex p-4 justify-between border-t-2 border-sky-700">
                                            <div className="flex items-center space-x-2">
                                                <FaEye className='text-sky-400'></FaEye>
                                                <span className='text-gray-200'>{course.views}</span>
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="flex space-x-1 items-center">
                                                    <BiTimer className='text-amber-500'></BiTimer>
                                                    <span className='text-gray-200'>{course.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-2'>
                                            <Link
                                                href="/"
                                                className="inline-flex items-center justify-center w-auto h-10 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                            >
                                                See Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    )
                }
            </div>
        </div >
    );
};

export default Courses;