import React from 'react';

const Education = () => {
    return (
        <div id="education" className='bg-black pb-[100px]'>
             <div className="w-3/5 mx-auto text-center space-y-2 mb-[20px]">
                <p className="text-xl text-sky-400 font-semibold">Education</p>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">University and School</h1>
            </div>
            <div className="w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl">
                <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold" >BSc in Computer Science</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold">2021-2025</p>
                    <h1>Bangladesh Army University Of Engineering and Technology</h1>
                </div>
                </div>
                <div className="bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl">
                <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold" >HSC</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold">2018-2020</p>
                    <h1>Bangladesh Army University Of Engineering and Technology</h1>
                </div>
                </div>
                <div className="bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl">
                <div className="p-6 bg-[#06131b] h-[200px] rounded-2xl">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold" >SSC</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold">2016-2018</p>
                    <h1>Bangladesh Army University Of Engineering and Technology</h1>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Education;