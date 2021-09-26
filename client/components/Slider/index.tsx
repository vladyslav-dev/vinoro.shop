import React, { FC, CSSProperties } from 'react';
import Slick, { Settings } from "react-slick";
import { SliderDesctopArrowSvg, SliderMobileArrowSvg } from '../Icons/Arrow';

export interface SliderProps { };
export interface SliderButtonProps {    
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    isArrowLeft?: boolean,
    isDesktop?: boolean
};


const SliderButton: FC<SliderButtonProps> = ({className, style, onClick, isArrowLeft, isDesktop}) => {

    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            {!isDesktop ? <SliderDesctopArrowSvg isArrowLeft={isArrowLeft} /> : <SliderMobileArrowSvg isArrowLeft={isArrowLeft}/>}
        </div>
    );
}
  
const Slider: FC<SliderProps> = ({}) => {
    
    const slickSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SliderButton />,
        prevArrow: <SliderButton isArrowLeft/>,
        appendDots: dots => (
            <div>
              <ul style={{ marginLeft: "10px" }}> {dots} </ul>
            </div>
          ),
          customPaging: () => (
            <div
              style={{
                width: "14px",
                height: "14px", 
                backgroundColor: "white",
                borderRadius: "50%"
              }}
            >
            </div>
          ),
          responsive: [
            {
              breakpoint: 780,
              settings: {
                nextArrow: <SliderButton isDesktop/>,
                prevArrow: <SliderButton isArrowLeft isDesktop/>,
                dots: false
              }
            }
        ]
    }

    const slides = [
        {
            id: '1',
            imageURL: "https://res.cloudinary.com/vinoro-media-storage/image/upload/v1632513149/products/Slider/alcoholSlide_ibmhrp.jpg",
            content: "Алкогольные напитки"
        },
        {
            id: '2',
            imageURL: "https://res.cloudinary.com/vinoro-media-storage/image/upload/v1632513147/products/Slider/foodSlide_brvsxa.jpg",
            content: "Продукты питания"
        },
        {
            id: '3',
            imageURL: "https://res.cloudinary.com/vinoro-media-storage/image/upload/v1632513147/products/Slider/chemicalSlide_nqvuwh.jpg",
            content: "Бытовые товары"
        },
    ]

    return (
        <div className="slider__container">
            <Slick {...slickSettings}>
                {
                    slides.map(el => (
                        <div key={el.id}> 
                            <div style={{ backgroundImage: `url( ${el.imageURL})`}} className="slider-item">
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="slider__content">
                                            <h1>{el.content}</h1>
                                        </div>
                                        <div className="slider__button">
                                            <button>СМОТРЕТЬ</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slick>
        </div>
    );
};
export default Slider;