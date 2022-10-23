import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brand/Brand1.png';
import Brand2 from '../../../assets/brand/Brand2.jfif';
import Brand3 from '../../../assets/brand/Brand3.jfif';

const CarouselSlider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselSlider;