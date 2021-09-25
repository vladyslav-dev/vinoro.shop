import React, { FC } from 'react';
import Slick, { Settings } from "react-slick";

export interface SliderProps { };


const Slider: FC<SliderProps> = ({}) => {
    
    const slickSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

    const slides = [
        {
            id: '1',
            imageURL: "https://res.cloudinary.com/vinoro-media-storage/image/upload/v1632513149/products/Slider/alcoholSlide_ibmhrp.jpg",

        },
        {
            id: '2',
            imageURL: "https://res.cloudinary.com/vinoro-media-storage/image/upload/v1632513147/products/Slider/foodSlide_brvsxa.jpg"
        },
        {
            id: '3',
            imageURL: "https://res.cloudinary.com/vinoro-media-storage/image/upload/v1632513147/products/Slider/chemicalSlide_nqvuwh.jpg"
        },
    ]

    return (
        <div className="slider__container">
            <Slick {...slickSettings}>
                {
                    slides.map(el => (
                        <div key={el.id}> 
                            <div style={{ backgroundImage: `url( ${el.imageURL})`}} className="slider-item">
                                {/* <p>{el.id}</p> */}
                            </div>
                        </div>
                    ))
                }
            </Slick>
        </div>
    );
};
export default Slider;