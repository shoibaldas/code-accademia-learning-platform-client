import React from 'react';
import logo from '../../asset/images/faqPreview.png'

const FaqPage = () => {
    return (
        <div id="faq" className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <img src={logo}

                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                alt='' />

                            <span className="relative text-blue-900">Frequently</span>
                        </span>{' '}
                        asked, <span className='text-red-900'>Questions</span>?
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Some FAQ has been given below, as they have been asked to us frequently...
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Is competitive coding easy?
                            </p>
                            <p className="text-gray-700">
                                One school of thought which is very popular and fairly simple to begin with is Competitive Programming. Getting started with it is quite easy and if one devotes sufficient amount of time and effort, you can develop a very strong grasp of programming logic in relatively short amount of time.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What qualities does a web developer need?
                            </p>
                            <p className="text-gray-700">
                                You must establish strong fundamentals, just as you must with any newly acquired knowledge. Candidates with Web Development expertise will stand out from the crowd. Understanding HTML, design skills, and analytical knowledge are all important Front-end Web Developer skills.
                            </p>
                        </div>

                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How Hard Is It to Learn JavaScript?
                            </p>
                            <p className="text-gray-700">
                                Arguably, JavaScript is one of the easiest programming languages to learn, so it serves as a great first language for anyone brand new to coding. Even the most complex lines of JavaScript code can be written one by one, in fragments. It can also be tested in the web browser at the same time.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                React Vs Vue: Which one is better?
                            </p>
                            <p className="text-gray-700">
                                What is the difference between ReactJS and VueJS? VueJS is two-way binding; whereas ReactJS is one-way binding and that's why VueJs uses more computer resources than ReactJS. Moreover, looking at the learning curve, Vue is easier than React and applications can get developed in a shorter time duration than ReactJS.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;