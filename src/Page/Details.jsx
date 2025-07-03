import React, { use, useEffect, useState } from 'react';
import bg from "../assets/details.jpg"
import { Link, useParams } from 'react-router';
import { Fade, Slide } from "react-awesome-reveal";


const Details = () => {
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch("/Project.json")
            .then(res => res.json())
            .then(data => setProject(data))
            .catch(error => {
                console.error('Error loading data:', error);
            });
    }, [])
    const { id } = useParams();
    const pro = project.find(pro => pro.id == id)
    console.log(project, id);

    if (!pro) {
        return <div className="text-center mt-10 text-xl">Loading project details...</div>;
    }
    const { photo,photo1, photo2, Details, livelink, github, name, keyword } = pro;

    return (
        <div className='w-full h-[1200px] md:h-[1200px]  lg:h-[1100px]  mx-auto relative'>
            <img className=" w-full h-full" src={bg} alt="" />
            <div className="bg-[#00000092] absolute z-0 top-[0%] md:top-[0%] lg:top-[0%] w-full h-full">
            </div>
            <div className=" lg:w-[70%] absolute top-5 lg:top-0 lg:left-[15%] ">
                <div className="nav-bg-color rounded-xl">
                    <div className="mt-[10%] grid grid-cols-1">
                        <Slide direction="left">
                            <div className="p-5">
                                <div className="carousel w-full mx-auto md:h-[500px] ">
                                    <div id="slide1" className="carousel-item relative w-full ">
                                        <img
                                            src={photo}
                                            className="w-full" />
                                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                            <a href="#slide3" className="btn btn-circle">❮</a>
                                            <a href="#slide2" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide2" className="carousel-item relative w-full">
                                        <img
                                            src={photo1}
                                            className="w-full" />
                                       
                                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                            <a href="#slide1" className="btn btn-circle">❮</a>
                                            <a href="#slide3" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide3" className="carousel-item relative w-full">
                                        <img
                                            src={photo2}
                                            className="w-full" />
                                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                            <a href="#slide2" className="btn btn-circle">❮</a>
                                            <a href="#slide1" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide direction="right">
                            <div className='w-full p-5'>
                                <div className="w-full mx-auto mt-5 ml-0  space-y-5">
                                    <h1 className="text-3xl lg:text-5xl font-bold">{name}</h1>
                                    <p className="bg-[#000000c8] p-2 ml-[-5px] rounded-2xl">{Details}</p>
                                    <div className="space-x-4">
                                        <Link className='p-3 bg-[#0fc2c7] hover:bg-[#0d639f] rounded-lg font-bold' to={livelink}>Live Link</Link>
                                        <Link className='p-3 bg-[#0fc2c7] hover:bg-[#0d639f]  rounded-lg font-bold' to={github}>Github Link</Link>
                                    </div>

                                    <div className='flex flex-wrap gap-5'>{keyword.map(k => <span className='p-3 bg-purple-800 rounded-lg'>{k}</span>)}</div>
                                    {/* <p className="p-3 bg-purple-800 rounded-lg w-1/2 lg:w-1/4">Price:{details.price}</p> */}
                                </div>
                            </div>
                        </Slide>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;