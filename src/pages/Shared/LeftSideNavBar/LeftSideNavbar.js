import React, { useContext } from 'react';
import { BiCategory, BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const LeftSideNavbar = () => {
    const { categories } = useContext(AuthContext);
    return (
        <div className=''>
            <div className="flex flex-col h-full rounded-md p-3 w-60 dark:bg-gray-900 dark:text-gray-100">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className='text-md font-semibold'>Courses Category</h2>
                        <div className='p-2  text-sky-500'>
                            <BiCategory className='h-6 w-6'></BiCategory>
                        </div>

                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button type="submit" className="p-2 text-sky-500 focus:outline-none focus:ring">
                                <BiSearchAlt className='h-6 w-6'></BiSearchAlt>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {
                                categories.map(category => <li className="rounded-sm hover:dark:bg-gray-800" key={category._id}>
                                    <Link rel="noopener noreferrer" to={`/course/${category._id}`} className="flex items-center p-2 space-x-3">
                                        <div className={category.color} >
                                            <i className={category.icon}></i>
                                        </div>
                                        <h2 className='text-md tex-2xl'>{category.name}</h2>
                                    </Link>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LeftSideNavbar;