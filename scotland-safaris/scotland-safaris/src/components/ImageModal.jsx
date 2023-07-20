import React from 'react'
import './ImageModal.css'

const ImageModal = ({image, alt, closeModal}) => {
  return (
    <div className="modal__overlay" onClick={closeModal} >
        <div className="modal__content">
            <img src={image} alt={alt} />
        </div>
    </div>
  )
}

export default ImageModal