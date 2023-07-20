// ImageCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const itemWidth = 100 / 6 + 10; // Adjust the width to include spacing between images
  const extendedImages = [...images, ...images, ...images, ...images, ...images, ...images]; // Duplicate the images array to create a continuous loop

  useEffect(() => {
    const scrollImages = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const interval = setInterval(scrollImages, 80000); // Adjust the interval for the scroll speed (60s)

    return () => {
      clearInterval(interval);
    };
  }, [totalImages]);

  return (
    <div className="carousel__container" ref={containerRef}>
      <div
        className="carousel__inner"
        style={{
          transform: `translateX(-${currentIndex * itemWidth}%)`,
          transition: 'transform 80s linear', // Set the CSS animation duration to 60s
        }}
      >
        {extendedImages.map((image, index) => (
          <div className="carousel__item" key={index}>
            <img src={image} alt={`Carousel ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;


