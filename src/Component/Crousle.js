import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="nav-button prev-button" onClick={goToPrevImage}>
        Prev
      </button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="carousel-image" />
      <button className="nav-button next-button" onClick={goToNextImage}>
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
