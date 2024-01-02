import React from 'react';
import Carousel from "../../Components/Carousel/Carousel";
import SectionFutures from "../../Components/HomeSections/SectionFutures/SectionFutures";
import TourSection from "../../Components/HomeSections/ToursSection/TourSection";

const Home = () => {
    return (
        <>
            <Carousel />
            <SectionFutures />
            <TourSection />
        </>
    );
};

export default Home;