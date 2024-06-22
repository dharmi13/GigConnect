import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.scss'; // Ensure you have the necessary styles

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const slidesData = [
        {
            id: 1,
            title: "Find the best freelance talent",
            description: "Browse top freelancers by category, location, and more.",
            image: "https://www.f-cdn.com/assets/main/en/assets/hire/hero/2560x1440/hero-01.jpg"
        },
        {
            id: 2,
            title: "Work with professionals",
            description: "Connect with highly skilled professionals.",
            image: "https://www.f-cdn.com/assets/main/en/assets/home/ai-business/ai-business-bg-ld.jpg"
        },
        {
            id: 3,
            title: "Achieve your goals",
            description: "Get work done efficiently and effectively.",
            image: "https://www.f-cdn.com/assets/main/en/assets/home/global-talent/global-talent-bg-ld.jpg"
        }
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slidesData.map(slide => (
                    <div key={slide.id} className="slide">
                        <img src={slide.image} alt={slide.title} />
                        <div className="text-overlay">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImageSlider;
