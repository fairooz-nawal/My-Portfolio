import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink, Link } from 'react-router';
import logo from "../assets/logo.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setIsOpen(false);
    };
    const link = <>
        <li>
            {/* <NavLink to="/home"><a
                onClick={() => handleLinkClick('#home')}
                href="#home"
                className={
                    activeLink === '#home'
                        ? "bg-gray-900 text-sky-600 font-bold"
                        : "font-bold text-white hover:text-sky-400"
                }
            >
                Home
            </a></NavLink> */}
        </li>
        <li>
            <a
                onClick={() => handleLinkClick('#about')}
                href="#about"
                className={
                    activeLink === '#about'
                        ? "bg-gray-900 text-sky-600 font-bold"
                        : "font-bold text-white hover:text-sky-400"
                }
            >
                About
            </a>
        </li>
        <li>
            <a
                onClick={() => handleLinkClick('#portfolio')}
                href="#portfolio"
                className={
                    activeLink === '#portfolio'
                        ? "bg-gray-900 text-sky-600 font-bold"
                        : "font-bold text-white hover:text-sky-400"
                }
            >
                Portfolio
            </a>
        </li>
        <li>
            <a
                onClick={() => handleLinkClick('#resume')}
                href="#resume"
                className={
                    activeLink === '#resume'
                        ? "bg-gray-900 text-sky-600 font-bold"
                        : "font-bold text-white hover:text-sky-400"
                }
            >
                Resume
            </a>
        </li>
    </>;
    return (
        <div className="fixed z-1 navbar shadow-sm md:px-[100px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <div className="w-[50px] h-[50px]"><img className='w-full h-full rounded-full' src={logo} alt="" /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center">
                    <div className=""><Link to=""><FaLinkedin className="text-4xl bg rounded-full p-2 hover:text-white hover:p-1" /></Link></div>
                    <div><Link to=""><FaGithub className="text-4xl bg rounded-full p-2 hover:text-white hover:p-1" /></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;