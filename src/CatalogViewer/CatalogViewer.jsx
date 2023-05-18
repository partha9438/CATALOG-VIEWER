import React, { useState, useEffect } from 'react';
import "./CatalogViewer.css"

const CatalogViewer = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  const handlePreviousImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = index => {
    setCurrentImageIndex(index);
    stopSlideshow();
  };

  const toggleSlideshow = () => {
    setIsSlideshowActive(prevState => !prevState);
  };

  const stopSlideshow = () => {
    setIsSlideshowActive(false);
  };

  useEffect(() => {
    let slideshowTimer;

    if (isSlideshowActive) {
      slideshowTimer = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => {
      clearInterval(slideshowTimer);
    };
  }, [isSlideshowActive, images.length]);

  return (
    <div className="catalog-viewer">
      <div className="catalog-viewer__image-details">
        <h1 className='header'>Catalog Viewer</h1>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="catalog-viewer__image"
        />
        <p>This is a nature beauty Image that shows about sunset and sunrise and beauty of the our earth nature </p>
      </div>
      <div className="catalog-viewer__controls">
        <button onClick={handlePreviousImage} className='previous'>
          Previous
        </button>
        <span>{`Image ${currentImageIndex + 1} of ${images.length}`}</span>
        <button onClick={handleNextImage}>
          Next
        </button>
        <button onClick={toggleSlideshow}>
          {isSlideshowActive ? 'Pause' : 'Play'}
        </button>
      </div>
      <div className="catalog-viewer__thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`catalog-viewer__thumbnail ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogViewer;
