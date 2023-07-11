import React from 'react'
import { Carousel } from 'react-bootstrap';
import BgImg from '../images/bg.jpg'
import AboutImg from '../images/about-bg.jpg'


const ImageSlider = () => {
    return (
        <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={BgImg}
                alt="First slide"
            />
                <Carousel.Caption className='text-carousel text-uppercase'>
                    <h4>this is a place where technology & creativity fused into digital chemistry</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={AboutImg}
                    alt="Second slide"
                />
                <Carousel.Caption className='text-carousel text-uppercase'>
                    <h3>we dont have the best but we have the greatest team</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageSlider;