export const jsxStyles = `
.slick-slider {
    height: 100%;
}
.slick-list {
    height: 100%;
}
.slick-next::before, .slick-prev::before {
    content: none;
}
.slider-top {
    box-shadow: 0px 4px 13px 3px rgba(0,0,0,0.5);
    height: 100vh;
}
.slider-item {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
}
.slick-arrow {
    height: auto;
    width: auto;
}
.slick-next {
    right: 25px;
    z-index: 1;
}
.slick-prev {
    left: 25px;
    z-index: 1;
}
.slick-dots {
    bottom: 25px;
    text-align: start;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1300px;
}
.dots-default {
    height: 14px;
    width: 14px;
    background-color: white;
    border-radius: 50%;
}
.dots-active {
    height: 8px;
    width: 8px;
    border: 3px solid white;
    background-color: $UI-color2;
    border-radius: 50%;
}
@media (max-width: 768px) {
    .slick-prev {
        top: auto;
        bottom: 0;
    }
    .slick-next {
        top: auto;
        bottom: 0;
        left: 80px;
        right: auto;
    }
    .container h1 {
        font-size: 40px; 
    }
}
`