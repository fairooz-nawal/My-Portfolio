import React from 'react';
import { GoProject } from 'react-icons/go';
import { SiCcleaner } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { Slide, Fade } from "react-awesome-reveal";
const AboutMe = () => {
    return (
        <div id="about" className='w-full  py-[100px]'>
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                    <Slide direction="left">
                        <div className="w-11/12 max-auto mb-2 relative group transition-transform duration-300 hover:-translate-y-2">
                            <div id="circle" className="absolute top-10 md:top-0 right-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full bg-[#0d639f] blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="rounded-2xl h-[300px] bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px]">
                                <div className="bg-[#06131b] h-[293px] rounded-2xl  p-6 flex items-center justify-center">
                                    <div className="text-center">
                                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>1</h1>
                                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Years of <br />Experience</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 relative group transition-transform duration-300 hover:-translate-y-2">
                            <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="grid grid-cols-1md:grid-cols-5 border-1 border-gray-700 p-[50px] bg-[#06131b] rounded-2xl">
                                <div className=""><GoProject className='text-4xl md:text-5xl lg:text-7xl text-sky-500 font-light' /></div>
                                <div className="md:col-span-4 space-y-4">
                                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">MERN stack, Reactjs, JavaScript many more..</h1>
                                    <p className="text-base md:text-xl lg:text-xl ">45 Projects</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className="space-y-4">
                    <Slide direction="right">
                        <h1 className="text-xl text-sky-400 font-semibold">About Me</h1>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Clean & Concise but Creative + Technical – Balanced Websites</h1>
                        <p className='text-sm'>I’m an aspiring web developer with hands-on experience building projects using HTML, CSS, JavaScript, and React. I enjoy learning and constantly improving my skills.Looking for opportunities to grow and contribute as a junior developer.</p><br /><br />
                    </Slide>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Fade delay={200}
                            duration={500}
                            fraction={0.5} >
                            <div className="bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl group transition-transform duration-300 hover:-translate-y-2">
                                <div className="flex md:flex-col lg:flex-row gap-4 items-center bg-[#06131b] h-[200px] rounded-2xl p-5">
                                    <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="bg-sky-400 p-4 rounded-full"><SiCcleaner className='text-xl md:text-3xl lg:text-3xl text-white font-light'></SiCcleaner></div>
                                    <div className="text-xl md:text-xl lg:text-3xl font-bold">Clean UI/UX</div>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={300}
                            duration={1000}
                            fraction={0.5} >

                            <div className="bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl group transition-transform duration-300 hover:-translate-y-2">
                                <div className="flex md:flex-col lg:flex-row gap-4 items-center bg-[#06131b] h-[200px] rounded-2xl p-5">
                                    <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="bg-sky-400 p-4 rounded-full"><CgWebsite className='text-xl md:text-3xl lg:text-3xl text-white font-light'></CgWebsite></div>
                                    <div className="text-xl md:text-xl lg:text-3xl font-bold">Stylish UI/UX</div>
                                </div>
                            </div>
                        </Fade>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;