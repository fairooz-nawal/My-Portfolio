import React from 'react';
import { Link } from 'react-router';
const SingleProject = ({pro}) => {
    console.log(pro);
    const {photo, livelink, github, name} = pro;
    return (
        <div className='bg-gradient-to-r from-sky-500  via-[#072531] to-[#0fc2c7] p-[3px] rounded-2xl'>
            <div className=" bg-[#06131b] w-full shadow-sm rounded-2xl">
                <div className='rounded-2xl'>
                    <img className='rounded-2xl h-[250px]'
                        src={photo}
                        alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <Link to={livelink}>Live Link</Link>
                    <Link to={github}>Github</Link>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;