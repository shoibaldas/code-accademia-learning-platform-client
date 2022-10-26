import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFileDownload, FaEye } from "react-icons/fa";
import { BiTimer } from 'react-icons/bi';
import { SiOpenaccess } from 'react-icons/si';

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div className='flex justify-center'>
            <div className="w-10/12 p-4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <h2 className="mb-0 capitalize text-xl font-semibold dark:text-gray-100">{course.name}</h2>
                    </div>
                    <Link
                        href="/"
                        aria-label="Download PDF"
                        className="inline-flex items-center justify-center w-auto h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    >
                        Download PDF
                        <FaFileDownload className='mx-2'></FaFileDownload>
                    </Link>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={course.picture} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex p-4 border-t-2 border-sky-700">
                            <div className="flex items-center space-x-1">
                                <FaEye className='text-sky-400'></FaEye>
                                <span className='text-gray-200'>{course.views}</span>
                            </div>
                            <div className="flex mx-4 space-x-2">
                                <div className="flex space-x-1 items-center">
                                    <BiTimer className='text-amber-500'></BiTimer>
                                    <span className='text-gray-200'>{course.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="block">
                            <h1 className="text-xl text-start font-semibold dark:text-violet-400">Overview :</h1>
                        </div>
                        <p className="leading-snug text-start dark:text-gray-300">{course.info}</p>

                    </div>
                    <div className="space-y-2">
                        <div className="block">
                            <h1 className="text-xl text-start font-semibold dark:text-violet-400">Course Objective:</h1>
                        </div>
                        <p className="leading-snug text-start dark:text-gray-300">{course.objective}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="block">
                            <h1 className="text-xl text-start font-semibold dark:text-violet-400">Audience Target:</h1>
                        </div>
                        <p className="leading-snug text-start dark:text-gray-300">{course.target}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="block">
                            <h1 className="text-xl text-start font-semibold dark:text-violet-400">Modules:</h1>
                        </div>
                        <p className="leading-snug text-start dark:text-gray-300">{course.outline}</p>
                    </div>
                    <Link
                        href="/"
                        aria-label="Download PDF"
                        className="inline-flex items-center justify-center w-auto h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    >
                        <SiOpenaccess className='mx-2'></SiOpenaccess>
                        Premium Access
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;