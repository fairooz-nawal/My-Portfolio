import React, { Suspense, use } from 'react';
import SingleProject from './SingleProject';

const promise = fetch("./Project.json").then(res => res.json())
const ProjectContainer = () => {
    const project = use(promise);
    return (
        <div id="projects" className='w-full bg-black pb-[100px]'>
            <div className="w-3/5 mx-auto text-center space-y-2 mb-[20px]">
                <p className="text-xl text-sky-400 font-semibold">Latest Projects</p>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Transforming Ideas into Exceptional</h1>
                <p className='text-sm'>A collection of projects I’ve built to sharpen my web development skills. Each one helped me explore new tools, frameworks, and challenges.</p>
            </div>

            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        project.map(pro => <SingleProject pro={pro}></SingleProject>)
                    }
                </Suspense>
            </div>

        </div>
    );
};

export default ProjectContainer;