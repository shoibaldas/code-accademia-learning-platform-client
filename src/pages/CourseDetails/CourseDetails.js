import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFileDownload, FaEye } from "react-icons/fa";
import { BiTimer } from 'react-icons/bi';
import { SiOpenaccess } from 'react-icons/si';
import { TbCurrencyTaka } from 'react-icons/tb';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {


    const course = useLoaderData();

    return (
        <div className='flex justify-center'>
            <div ref={ref} className="w-10/12 z-0 p-4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <h2 className="mb-0 capitalize text-xl font-semibold dark:text-gray-100">{course.name}</h2>
                    </div>
                    <Pdf targetRef={ref} filename="course_Outline.pdf">
                        {({ toPdf }) => <Link
                            onClick={toPdf}
                            aria-label="Download PDF"
                            className="inline-flex items-center justify-center w-auto h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Download PDF
                            <FaFileDownload className='mx-2'></FaFileDownload>
                        </Link>}
                    </Pdf>
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
                                <div className="flex space-x-0 items-center">
                                    <TbCurrencyTaka className='text-green-500'></TbCurrencyTaka>
                                    <span className='text-gray-200'>{course.taka}</span>
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
                    <div className='relative'>
                        < label htmlFor="my-modal" className="inline-flex items-center justify-center w-auto h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none cursor-pointer" > <SiOpenaccess className='mx-2'></SiOpenaccess>
                            Premium Access</label >

                        {/* Put this part before </body> tag */}
                        < input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">One Step Away!</h3>
                                <div className='flex items-center mt-6'>
                                    <img src={course.picture} className="md:w-3/12 md:h-16 w-2/12 h-10 rounded-lg" alt="" />
                                    <h5 className='mx-4'>{course.name}</h5>
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="absolute top-3 right-3 cursor-pointer hover:text-red-500 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                                    </svg></label>
                                    <Link to='/checkout' className="inline-flex items-center justify-center w-auto h-10 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none cursor-pointer">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CourseDetails;