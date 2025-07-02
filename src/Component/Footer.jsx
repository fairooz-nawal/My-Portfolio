import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router';
import bg from "../assets/footer.jpg"
const Footer = () => {
    return (
        <div id="footer" className='w-full bg-[#06131b] more-snow realtive'>
            <div className="bg-[#00000071] absolute z-0 top-[12%] md:top-[18%] lg:top-[20%] w-full h-[630px] md:h-[330px] lg:h-[440px] ">
            </div>
            <div className="w-11/12 z-3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-[100px] absolute top-0 left-0 right-0">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-start lg:text-center">Get Ready To <br /> Create Great</div>
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