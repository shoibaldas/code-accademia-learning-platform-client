import React from 'react';
import { BiCategory, BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { DiCodeBadge } from "react-icons/di";
import { TbBrandJavascript, TbCodePlus, TbBrandPython } from "react-icons/tb";
import { AiOutlineCodepen, AiOutlineCode } from "react-icons/ai";

const LeftSideNavbar = () => {
    return (
        <div className='ml-10'>
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
                            <li className="rounded-sm hover:dark:bg-gray-800">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3">
                                    <div className='text-sky-500'>
                                        <DiCodeBadge className='h-6 w-6'></DiCodeBadge>
                                    </div>
                                    <span>Html/CSS</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:dark:bg-gray-800">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3">
                                    <div className='text-amber-700'>
                                        <TbBrandJavascript className='h-6 w-6'></TbBrandJavascript>
                                    </div>
                                    <span>JavaScript</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:dark:bg-gray-800">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3">
                                    <div className='text-red-300'>
                                        <TbCodePlus className='h-6 w-6'></TbCodePlus>
                                    </div>
                                    <span>C/C++</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:dark:bg-gray-800">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3">
                                    <div className='text-violet-700'>
                                        <AiOutlineCodepen className='h-6 w-6'></AiOutlineCodepen>
                                    </div>
                                    <span>ASP .NET</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:dark:bg-gray-800">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3">
                                    <div className='text-green-700'>
                                        <AiOutlineCode className='h-6 w-6'></AiOutlineCode>
                                    </div>
                                    <span>Bash Language</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:dark:bg-gray-800">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3">
                                    <div className='text-amber-300'>
                                        <TbBrandPython className='h-6 w-6'></TbBrandPython>
                                    </div>
                                    <span>Python</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNavbar;