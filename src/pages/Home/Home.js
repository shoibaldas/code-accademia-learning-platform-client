import React from 'react';
import { Link } from 'react-router-dom';
import Lottiecomponent from '../../asset/LottieComponent/Lottiecomponent';

const Home = () => {
    return (
        <div className="flex flex-col-reverse -mt-12 md:flex-row md:px-16 lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Accademia Intro
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            The more you learn,
                            <br className="hidden md:block" />
                            the more{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                you gain knowledge
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Professional instructors will educate you how to maximize your potential. For you or your company, get unlimited access to the best courses. View the blog, register online, and receive lifetime access.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:flex-row">
                        <Link
                            to="/courses"
                            className="inline-flex items-center justify-center w-auto h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Enroll Now
                        </Link>
                        <Link
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Lottiecomponent></Lottiecomponent>
            </div>
        </div>
    );
};

export default Home;