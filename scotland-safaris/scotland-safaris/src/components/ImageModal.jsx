import React from 'react'
import './ImageModal.css'

const ImageModal = ({images, alt, closeModal, currentIndex, handleNext, handlePrev}) => {
  return (
    <div className="modal__overlay" onClick={closeModal} >
        <div className="modal__content">
            <img src={images[currentIndex]} alt={`Gallery Image ${currentIndex + 1}`} />
            <button className='modal__arrow modal__arrow--prev' onClick={handlePrev} >
                &lt;
            </button>
            <button className='modal__arrow modal__arow-next' onClick={handleNext} >
                &gt;
            </button>
        </div>
    </div>
  )
}

export default ImageModal