import React from 'react';
import './ImageModal.css';

const ImageModal = ({ images, alt, closeModal, currentIndex, handleNext, handlePrev }) => {

    const handlePrevClick = ( event) => {
        event.stopPropagation();
        handlePrev();
    };

    const handleNextClick = (event) => {
        event.stopPropagation();
        handleNext();
    }

  return (
    <div className="modal__overlay" onClick={closeModal}>
    <div className="modal__content">
      <img src={images[currentIndex]} alt={`Gallery ${currentIndex + 1}`} />
      <button className="modal__arrow modal__arrow--prev" onClick={handlePrevClick}>
        &lt;
      </button>
      <button className="modal__arrow modal__arrow--next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  </div>
);
};

export default ImageModal;