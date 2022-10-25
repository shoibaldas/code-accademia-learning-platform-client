import React from 'react';
import logo1 from '../../asset/images/cors.jpg';
import logo2 from '../../asset/images/firebase.jpg';
import logo3 from '../../asset/images/node.png';
import logo4 from '../../asset/images/private_route.jpg';

const Blog = () => {
    return (
        <section className=" text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group rounded-md dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={logo1} alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-xl font-semibold">What is cors?</h3>
                            <p>An HTTP-header based system called Cross-Origin Resource Sharing (CORS) enables a server to specify any origins (domain, scheme, or port) other than its own from which a browser should be able to load resources.</p>
                        </div>
                    </div>
                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group rounded-md dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={logo2} alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-xl font-semibold">Why are you using firebase? What other options do you have to implement authentication?</h3>
                            <p>I am using firebase to implement authentication and storing user data in the google firebase cloud. And, <span className='font-semibold'>other options to implement authentications</span> are, <span className='text-sky-300'>Auth0, Amazon Cognito, Okta, MongoDB, JSON Web Token</span>. </p>
                        </div>
                    </div>
                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group rounded-md dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={logo4} alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-xl font-semibold">How does the private route work?</h3>
                            <p>In the event that the user is logged in, the react private route component renders children. The user gets led to the /login page with the return url supplied in the location state attribute if they are not logged in.</p>
                        </div>
                    </div>
                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group rounded-md dark:bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={logo3} alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-xl font-semibold">What is Node? How does Node work?</h3>
                            <p>Node enables programmers to create JavaScript code that executes within the computer's operating system rather than a browser. Node is entirely based on events. The server essentially consists of one thread processing each event one at a time. One type of event is a fresh request being received. When there is a blocked IO action, the server begins processing it and instead of waiting for it to finish, it registers a callback function.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;