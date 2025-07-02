import React from 'react';
import { GoProject } from 'react-icons/go';
import { SiCcleaner } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
const AboutMe = () => {
    return (
        <div className='w-full bg-black py-[100px]'>
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                    <div className="w-11/12 max-auto h-[300px] rounded-2xl bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px]">
                        <div class="bg-[#06131b] w-full h-full rounded-2xl  p-6 flex items-center justify-center ">
                            <div className="text-center">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>1</h1>
                                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Years of <br />Experience</h1>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5' >
                        <div className="grid grid-cols-5 w-11/12 border-1 border-gray-700 p-[50px] bg-[#06131b] rounded-2xl">
                            <div className=""><GoProject className='text-4xl md:text-5xl lg:text-7xl text-sky-500 font-light' /></div>
                            <div className="col-span-4 space-y-4">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">MERN stack, Reactjs, JavaScript many more..</h1>
                                <p className="text-base md:text-xl lg:text-xl ">45 Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-xl text-sky-400 font-semibold">About Me</h1>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Clean & Concise but Creative + Technical – Balanced Websites</h1>
                    <p className='text-sm'>I’m an aspiring web developer with hands-on experience building projects using HTML, CSS, JavaScript, and React. I enjoy learning and constantly improving my skills.Looking for opportunities to grow and contribute as a junior developer.</p><br /><br />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl">
                            <div className="flex gap-4 items-center bg-[#06131b] h-[200px] rounded-2xl">
                                <div className="bg-sky-400 p-4 rounded-full"><SiCcleaner className='text-xl md:text-3xl lg:text-3xl text-white font-light'></SiCcleaner></div>
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold">Clean UI/UX</div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl">
                            <div className="flex gap-4 items-center bg-[#06131b] h-[200px] rounded-2xl">
                                <div className="bg-sky-400 p-4 rounded-full"><CgWebsite className='text-xl md:text-3xl lg:text-3xl text-white font-light'></CgWebsite></div>
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold">Stylish UI/UX</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;