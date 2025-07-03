import React from 'react';
import Banner from '../Component/Banner';
import AboutMe from '../Component/AboutMe';
import ProjectContainer from '../Component/ProjectContainer';
import Education from '../Component/Education';
import Experience from '../Component/Experience';


const Home = () => {
    return (
        <div id='home' className='max-w-full md:max-w-8xl lg:max-w-8xl'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <ProjectContainer></ProjectContainer>
            <Education></Education>
            <Experience></Experience>
        </div>
    );
};

export default Home;