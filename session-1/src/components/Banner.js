import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'img/banner1.jpg',
    'img/banner2.jpg',
    'img/banner3.jpg'
];

const Banner = () => {
    return (
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }} />
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }} />
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }} />
                </div>
            </Slide>
        </div>
    )
};

export default Banner;