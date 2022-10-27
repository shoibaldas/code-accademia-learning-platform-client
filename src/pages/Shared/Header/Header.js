import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import logo from '../../../site-logo.png';
import { FaUserAlt, FaMoon, FaSun } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from 'react-scroll';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [value, setValue] = useState(true);

    const handleValue = (event) => {
        if (value === true) {
            event.target.value = false
            setValue(event.target.value);

        }
        else {
            event.target.value = true
            setValue(event.target.value);
        }
    }

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="bg-transparent">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <NavLink
                            to="/"
                            aria-label="Home"
                            title="Home"
                            className="inline-flex items-center mr-8"
                        >
                            <img className='w-16 h-16' src={logo} alt="" />
                            <span className="text-xl font-bold tracking-wide text-gray-700 uppercase">
                                Code Accademia
                            </span>
                        </NavLink>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <NavLink
                                    to="/"
                                    aria-label="Home"
                                    title="Home"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courses"
                                    aria-label="Courses"
                                    title="Courses"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <Link
                                    to="faq"
                                    spy={true} smooth={true} offset={50} duration={1000}
                                    aria-label="FaQ"
                                    title="FaQ"
                                    className="font-medium cursor-pointer tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    aria-label="Blog"
                                    title="Blog"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <Link
                                    to="about"
                                    spy={true} smooth={true} offset={50} duration={1000}
                                    aria-label="About"
                                    title="About"
                                    className="font-medium cursor-pointer tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    About
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        {user?.uid ?
                            <>
                                <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                                    {
                                        user?.uid ?
                                            <img className='w-10 rounded-full' src={user?.photoURL} alt='' /> :
                                            <FaUserAlt className='bg-violet-800'></FaUserAlt>
                                    }
                                </div>
                                <li>
                                    <RiLogoutBoxRLine onClick={handleLogout} className='text-red-800 h-6 w-8 cursor-pointer' aria-label="Sign out"
                                        title="Sign out"></RiLogoutBoxRLine>
                                </li>
                                <li>
                                    <NavLink onClick={handleValue}>{
                                        value ?
                                            <div className="tooltip tooltip-bottom" data-tip="Dark" >
                                                <FaMoon />
                                            </div>
                                            :
                                            <div className="tooltip tooltip-bottom" data-tip="Light">
                                                <FaSun />
                                            </div>
                                    }</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink
                                        to='/login'
                                        aria-label="Login"
                                        title="Login"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/signup"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Sign up
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={handleValue}>{
                                        value ?
                                            <div className="tooltip tooltip-bottom" data-tip="Dark" >
                                                <FaMoon />
                                            </div>
                                            :
                                            <div className="tooltip tooltip-bottom" data-tip="Light">
                                                <FaSun />
                                            </div>
                                    }</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                    <div className="lg:hidden z-10">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-gray-100 border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                href="/"
                                                aria-label="Home"
                                                title="Home"
                                                className="inline-flex items-center"
                                            >
                                                <img className='w-16 h-16' src={logo} alt="" />
                                                <span className="text-xl font-bold tracking-wide text-gray-700 uppercase">
                                                    Code Accademia
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to="/"
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/courses"
                                                    aria-label="Courses"
                                                    title="Courses"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Courses
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/faq"
                                                    aria-label="FAQ"
                                                    title="FAQ"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    FAQ
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/blog"
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/about"
                                                    aria-label="About"
                                                    title="About"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    About
                                                </NavLink>
                                            </li>
                                            {user?.uid ?
                                                <>
                                                    <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                                                        {
                                                            user?.uid ?
                                                                <img className='w-10 rounded-full' src={user?.photoURL} alt='' /> :
                                                                <FaUserAlt className='bg-violet-800'></FaUserAlt>
                                                        }
                                                    </div>
                                                    <li>
                                                        <RiLogoutBoxRLine onClick={handleLogout} className='text-red-800 mx-auto h-6 w-8 cursor-pointer' aria-label="Sign out"
                                                            title="Sign out"></RiLogoutBoxRLine>
                                                    </li>
                                                    <li>
                                                        <NavLink onClick={handleValue}>{
                                                            value ?
                                                                <div className="tooltip tooltip-bottom" data-tip="Dark" >
                                                                    <FaMoon />
                                                                </div>
                                                                :
                                                                <div className="tooltip tooltip-bottom" data-tip="Light">
                                                                    <FaSun />
                                                                </div>
                                                        }</NavLink>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li>
                                                        <NavLink
                                                            to='/login'
                                                            aria-label="Login"
                                                            title="Login"
                                                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                                        >
                                                            Login
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            to="/signup"
                                                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                                            aria-label="Sign up"
                                                            title="Sign up"
                                                        >
                                                            Sign up
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink onClick={handleValue}>{
                                                            value ?
                                                                <div className="tooltip tooltip-bottom" data-tip="Dark" >
                                                                    <FaMoon />
                                                                </div>
                                                                :
                                                                <div className="tooltip tooltip-bottom" data-tip="Light">
                                                                    <FaSun />
                                                                </div>
                                                        }</NavLink>
                                                    </li>
                                                </>
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;