import React from 'react';
import bg from "../assets/banner.jpg"
import pro from "../assets/profilePic.png"
const Banner = () => {
    return (
        <div className='relative'>
            <img className='z-0 w-full h-[720px] md:h-[400px] lg:h-[550px]' src={bg} alt="" />
            <div className="bg-[#00000071] absolute top-[12%] md:top-[18%] lg:top-[20%] w-full h-[630px] md:h-[330px] lg:h-[440px] "> 
            </div>
            <div className="absolute top-10 md:top-0 right-0 w-[100px] h-[100px] md:w-[300px] md:h-[300px] rounded-full bg-[#0d639f] blur-[90px]"></div>
            <div className="absolute bottom-10 left-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#0d639f] blur-[90px]"></div>
           
            <div className="absolute top-[10%] lg:top-[15%] left-0 right-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="p-5 md:p-5 lg:py-[100px] lg:pl-[70px] space-y-4" >
                    <p className='text-xl'>Hello, I am</p>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Syeda Fairooz Nawal</h1>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>A Junior Frontend Developer</h1>
                    <p className='md:font-bold'>This is my portfolio with a collection of my work, achievements, and skills that highlights my abilities and professional growth.</p>
                </div>
                <div className="">
                    <div className="w-full h-full flex items-center">
                         <img src={pro} className='w-[200px] md:w-[200px] lg:w-[300px] mx-auto rounded-2xl border-10 border-gray-200' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;