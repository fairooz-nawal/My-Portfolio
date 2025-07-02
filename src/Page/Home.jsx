import React from 'react';
import Banner from '../Component/Banner';
import AboutMe from '../Component/AboutMe';
import ProjectContainer from '../Component/ProjectContainer';
import Education from '../Component/Education';


const Home = () => {
    return (
        <div id='home max-w-full md:max-w-7xl lg:max-w-7xl'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <ProjectContainer></ProjectContainer>
            <Education></Education>
        </div>
    );
};

export default Home;