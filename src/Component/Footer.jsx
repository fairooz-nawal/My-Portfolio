import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='w-full bg-[#06131b] md:p-[100px] lg:p-[100px]'>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-5 ">
                <div className="className='text-2xl md:text-4xl lg:text-5xl font-bold">Get Ready To <br /> Create Great</div>
                <div className="space-y-5">
                    <h1 className='text-lg md:text-2xl lg:text-2xl font-bold'>Contact Info</h1>
                    <p>Address: Mohakhali, Dhaka, Bangladesh</p>
                    <p>Phone: +8801770489954</p>
                    <p>Email: syedafairooznawal01@gmail.com</p>
                    <div className="flex items-center gap-5">
                        <div className=""><Link to="https://www.linkedin.com/in/syeda-fairooz-nawal-softwaredeveloper/"><FaLinkedin className="text-5xl bg rounded-full p-2 hover:text-white hover:p-1" /></Link></div>
                        <div><Link to="https://github.com/fairooz-nawal"><FaGithub className="text-5xl bg rounded-full p-2 hover:text-white hover:p-1" /></Link></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;