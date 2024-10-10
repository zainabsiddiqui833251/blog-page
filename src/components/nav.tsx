'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-5 right-5 z-50 p-2 bg-[#1a1a1a] text-[#f0f0f0] rounded-lg md:hidden"
            >
                {isOpen ? 'Close' : 'Open'} Menu
            </button>

            {/* Sidebar */}
            <aside className={`fixed top-0 right-0 w-full h-full bg-[#1a1a1a] border-l-2 border-[#ff7043] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
                <div className="p-4">
                    <div className="logo text-2xl font-black text-[#ff7043]">
                        <h2><Link href="/">BLOGSPAGE</Link></h2>
                    </div>
                    <nav className="mt-6">
                        <ul className="flex flex-col space-y-4">
                            <li><Link href="/about" className="text-[#b3b3b3] link hover:text-[#ff7043]">About</Link></li>
                            <li><Link href="/services" className="text-[#b3b3b3] link hover:text-[#ff7043]">Our Services</Link></li>
                            <li className="group relative z-30 w-full">
                                <Link href="/" className="text-[#b3b3b3] link hover:text-[#ff7043]">Blogs</Link>
                                <ul className="dropdown-content hidden group-hover:flex flex-col bg-[#1a1a1a] text-[#f0f0f0] border border-[#ff7043] overflow-auto p-4 space-y-2 absolute left-0 top-full">
                                    <li><Link href='/blog_1' className="text-[#ff7043] hover:underline">Paris, France</Link></li>
                                    <li><Link href='/blog_2' className="text-[#ff7043] hover:underline">Rome, Italy</Link></li>
                                    <li><Link href='/blog_3' className="text-[#ff7043] hover:underline">Bali, Indonesia</Link></li>
                                    <li><Link href='/blog_4' className="text-[#ff7043] hover:underline">New York City, USA</Link></li>
                                    <li><Link href='/blog_5' className="text-[#ff7043] hover:underline">Kyoto, Japan</Link></li>
                                    <li><Link href='/blog_6' className="text-[#ff7043] hover:underline">Cape Town, South Africa</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/contact" className="text-[#b3b3b3] link hover:text-[#ff7043]">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <div className="mt-6">
                        <button className="relative inline-block px-4 py-2 text-[#f0f0f0] font-black border-2 border-[#ff7043] rounded-xl overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#ff7043] before:transition-all before:duration-500 hover:before:left-0 hover:text-[#1a1a1a]">
                            <span className='z-20 relative'>Dark Mode</span>
                        </button>
                        <button className="relative inline-block ml-5 px-4 py-2 text-[#f0f0f0] font-black border-2 border-[#ff7043] rounded-xl overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#ff7043] before:transition-all before:duration-500 hover:before:left-0 hover:text-[#1a1a1a]">
                            <span className='z-20 relative'>Sign In</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Navbar for larger screens */}
            <nav className="w-full justify-between items-center p-4 text-[#f0f0f0] bg-[#1a1a1a] md:flex md:justify-between md:items-center md:h-16 md:block hidden z-50">
                <div className="logo text-2xl font-black text-[#ff7043]">
                    <h2><Link href="/">BLOGSPAGE</Link></h2>
                </div>

                <div className="nav-links">
                    <ul className="flex space-x-6">
                        <li><Link href="/about" className="text-[#b3b3b3] link hover:text-[#ff7043]">About</Link></li>
                        <li><Link href="/services" className="text-[#b3b3b3] link hover:text-[#ff7043]">Our Services</Link></li>
                        <li className="group relative z-50">
                            <Link href="/" className="text-[#b3b3b3] link hover:text-[#ff7043]">Blogs</Link>
                            <div className="dropdown-content hidden group-hover:flex flex-col bg-[#1a1a1a] text-[#f0f0f0] border border-[#ff7043] overflow-auto p-4 absolute w-[350px] left-0 top-full">
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_1' className="text-[#ff7043] hover:underline">Paris, France</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Explore the romantic streets of Paris and discover its iconic landmarks.</p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_2' className="text-[#ff7043] hover:underline">Rome, Italy</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Uncover the rich history and delicious cuisine of the Eternal City.</p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_3' className="text-[#ff7043] hover:underline">Bali, Indonesia</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Relax on beautiful beaches and immerse yourself in Balinese culture.</p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_4' className="text-[#ff7043] hover:underline">New York City, USA</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Experience the hustle and bustle of the city that never sleeps.</p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_5' className="text-[#ff7043] hover:underline">Kyoto, Japan</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Step back in time and explore the traditional temples of Kyoto.</p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_6' className="text-[#ff7043] hover:underline">Cape Town, South Africa</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Enjoy breathtaking views and vibrant culture in Cape Town.</p>
                                </div>

                            </div>
                        </li>
                        <li><Link href="/contact" className="text-[#b3b3b3] link hover:text-[#ff7043]">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="mt-6 md:flex md:space-x-5">
                    <button className="relative inline-block px-4 py-2 text-[#f0f0f0] font-black border-2 border-[#ff7043] rounded-xl overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#ff7043] before:transition-all before:duration-500 hover:before:left-0 hover:text-[#1a1a1a]">
                        <span className='z-20 relative'>Dark Mode</span>
                    </button>
                    <button className="relative inline-block px-4 py-2 text-[#f0f0f0] font-black border-2 border-[#ff7043] rounded-xl overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#ff7043] before:transition-all before:duration-500 hover:before:left-0 hover:text-[#1a1a1a]">
                        <span className='z-20 relative'>Sign In</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
