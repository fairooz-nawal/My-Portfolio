import React from 'react';
import Banner from '../Component/Banner';
import AboutMe from '../Component/AboutMe';


const Home = () => {
    return (
        <div id='home max-w-full md:max-w-7xl lg:max-w-7xl'>
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;