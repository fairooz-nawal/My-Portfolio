import React, { useState } from 'react';
import { Slide, Fade } from "react-awesome-reveal";
import logo from "./../assets/download.jpeg"
import cer from "../assets/certificate.png"
const Experience = () => {
    return (
        <div id="education" className='pb-[100px]'>
            <div className="w-3/5 mx-auto text-center space-y-2 mb-[20px]">
                <Fade delay={200}
                    duration={500}
                    fraction={0.5} >
                    <p className="text-xl text-sky-400 font-semibold">Work Experience</p>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">My Internships and Acheivements</h1>
                </Fade>
            </div>
            <div className="w-10/12 mx-auto  grid grid-cols-1 gap-5">
                <Slide direction="left">
                    <div className="bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl  group transition-transform duration-300 hover:-translate-y-5">
                        <div className="absolute top-10 md:top-0 right-0 w-[150px] h-[150px] md:w-[150px] md:h-[150px] rounded-full bg-[#0d639f] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="p-6 bg-[#06131b]  rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            <div className="md:col-span-2 lg:col-span-4 space-y-5">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold" >Trust Bank LTD [Head Office and Millennium Corporate Branch]</h1>
                                <p className="text-lg md:text-lg lg:text-xl font-bold">26 Nov, 2023 - 26 Dec, 2023</p>
                                <h1>Internship [IT Division]</h1>
                                <button className="btn btn-warning" onClick={() => document.getElementById('my_modal_5').showModal()}>Show Certificate</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                       <img src={cer} alt="" />
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                            <div className="w-full md:col-span-1 lg:col-span-1"><img className='w-full rounded-2xl border-3 border-sky-900' src={logo} alt="" /></div>
                        </div>
                    </div>
                </Slide>


            </div>
        </div>
    );
};

export default Experience;