import React from 'react';
import Banner from '../Banner';
import AboutUs from './AboutUs';
import CategoryGallery from './Category/CategoryGallery';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <CategoryGallery></CategoryGallery>
        </div>
    );
};

export default Home;