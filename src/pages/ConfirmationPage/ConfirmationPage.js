import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import toast from 'react-hot-toast';

const ConfirmationPage = () => {
    const course = useLoaderData();

    const showSuccess = () => {
        toast.success('Successfull')
    }

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="text-start text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={course.picture} alt="Polaroid camera" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold  leading-snug sm:pr-8">{course.name}</h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="flex text-lg text-amber-600 font-semibold">{course.taka}<TbCurrencyTaka className='text-green-600'></TbCurrencyTaka></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
                <div className="space-y-1">
                    <div className='flex justify-end'>
                        <h1 className='mx-2'>Total amount:</h1>
                        <p className="font-semibold text-amber-600">{course.taka}</p>
                        <TbCurrencyTaka className='text-green-600'></TbCurrencyTaka>
                    </div>
                    <p className="text-sm text-end dark:text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to={`/course/${course._id}`} className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                        <span className="sr-only sm:not-sr-only">to Course</span>
                    </Link>
                    <Link onClick={showSuccess} className="inline-flex items-center justify-center w-auto h-10 px-12 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none cursor-pointer">Pay</Link>
                </div>
            </div>
        </div>

    );
};

export default ConfirmationPage;