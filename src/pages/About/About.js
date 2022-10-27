import React from 'react';
import logo from '../../site-logo.png';

const About = () => {
    return (
        <div id="about" className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
            <div className="p-8 rounded shadow-xl sm:p-16">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src={logo} alt="" />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span className='text-purple-500'>Code Accademia</span> is carried out by passionate developers</h2>
                            <p class="mt-6 text-gray-600">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                            <p class="mt-4 text-gray-600"> We believe Learning is the source of human progress.It has the power to transform our world from illness to health, from poverty to prosperity, from conflict to peace. It has the power to transform our lives for ourselves, for our families, for our communities. No matter who we are or where we are, learning empowers us to change and grow and redefine what’s possible. That’s why access to the best learning is a right, not a privilege.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;