import React from "react";
import CategoryHome from "../Category/CategoryHome";
import Banner from '../../components/Banner'


const HomePage = () => {
    return (
        <div className="home-container">
            <Banner/>
            <CategoryHome id="2" showitem="3" />
            <CategoryHome id="3" showitem="3" />
        </div>
    );
};

export default HomePage;
