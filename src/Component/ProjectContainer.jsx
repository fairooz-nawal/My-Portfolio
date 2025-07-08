import React, { Suspense, use } from 'react';
import SingleProject from './SingleProject';
import { Fade } from "react-awesome-reveal";
const promise = fetch("./Project.json").then(res => res.json())
const ProjectContainer = () => {
    const project = use(promise);
    return (
        <div id="projects" className='w-full pb-[100px]'>
            <div className="w-3/5 mx-auto text-center space-y-2 mb-[20px]">
                <Fade delay={200}
                    duration={500}
                    fraction={0.5} 
                    distance="0px">
                    <p className="text-xl text-sky-400 font-semibold">Latest Projects</p>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Transforming Ideas into Exceptional</h1>
                    <p className='text-sm'>A collection of projects I’ve built to sharpen my web development skills. Each one helped me explore new tools, frameworks, and challenges.</p>
                </Fade>
            </div>

            <div className=" w-full md:w-10/12 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        project.map((pro) => <SingleProject key={pro.id} pro={pro}></SingleProject>)
                    }
                </Suspense>
            </div>

        </div>
    );
};

export default ProjectContainer;