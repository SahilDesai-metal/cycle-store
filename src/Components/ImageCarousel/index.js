import logo from './../../logo.svg';
import logo1 from './../../assets/images/1.jpg';
import logo2 from './../../assets/images/2.jpg';
import logo3 from './../../assets/images/3.jpg';
import logo4 from './../../assets/images/4.jpg';
import logo5 from './../../assets/images/5.jpg';
import leftArrow from './../../assets/font-images/arrow-left-solid.svg'
import rightArrow from './../../assets/font-images/arrow-right-solid.svg'
import './index.css';
import { useState } from 'react';


var imagesArr = [logo1, logo2, logo3, logo4, logo5];

export const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function handleLeft() {
        setCurrentImageIndex(prevState => prevState === 0 ? 4 : prevState - 1);
    }

    function handleRight() {
        setCurrentImageIndex(prevState => (prevState + 1) % 5);
    }

    return (
        <>
            <div className="carousel">
                <div className="carousel-container">
                    {
                        imagesArr.map((val, index) => (
                            <img
                                alt="carousel"
                                key={index}
                                className={index === currentImageIndex
                                    ? "carousel-image carousel-image-current"
                                    : "carousel-image"}
                                src={val}
                            />
                        ))
                    }
                </div>
                <div className="navigator left-arrow" onClick={handleLeft}>
                    <img
                        src={leftArrow}
                        width="50px"
                        height="50px"
                        alt="left arrow"
                    />
                </div>
                <div className="navigator right-arrow" onClick={handleRight}>
                    <img
                        src={rightArrow}
                        width="50px"
                        height="50px"
                        alt="right arrow"
                    />
                </div>
            </div>
        </>
    );
}