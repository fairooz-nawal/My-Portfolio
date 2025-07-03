import React from 'react';
import { Link } from 'react-router';
import { Slide } from "react-awesome-reveal";
const SingleProject = ({ pro }) => {
    const { id, photo, livelink, github, name, keyword } = pro;
    return (
        <Slide direction="up">
            <div className='bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl group transition-transform duration-300 hover:-translate-y-5'>
                <div className="absolute bottom-0 left-[10%]  w-[200px] h-[50px] md:w-[300px] md:h-[50px] bg-[#0d639f] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className=" bg-[#06131b] w-full shadow-sm rounded-2xl">
                    <div className='rounded-2xl'>
                        <img className='rounded-2xl  h-[200px] md:h-[200px] lg:h-[300px]'
                            src={photo}
                            alt="Shoes" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div className="flex gap-5">
                            <Link to={livelink}>Live Link</Link>
                            <Link to={github}>Github</Link>
                        </div>
                        <div className="h-[100px] overflow-hidden ">
                            <div className='flex flex-wrap gap-5'>{keyword.map((k,index) => <span key={index} className='text-sm border-2 border-gray-800 p-2 rounded-2xl'>{k}</span>)}</div>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/details/${id}`}><button className="btn ">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>

    );
};

export default SingleProject;