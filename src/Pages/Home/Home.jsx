import React from 'react';
import Banner from '../Banner';
import AboutUs from './AboutUs';
import CategoryGallery from './Category/CategoryGallery';
import About from '../About';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <CategoryGallery></CategoryGallery>
           <About></About>
        </div>
    );
};

export default Home;