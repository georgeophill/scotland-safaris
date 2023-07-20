import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/stag-and-strath.JPG';
import ImageModal from '../../components/ImageModal';
import './Gallery.css';

const Gallery = () => {
  const galleryLength = 11;
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesArray = [];

      for (let i = 1; i <= galleryLength; i++) {
        try {
          const imageModule = await import(`../../images/gallery/gallery${i}.JPG`);
          imagesArray.push(imageModule.default);
        } catch (error) {
          console.error(`Error loading image ${i}:`, error);
        }
      }

      setImages(imagesArray);
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Beatae non repudiandae ducimus repellendus cupiditate unde. Temporibus eius fugit quis nihil.
      </Header>
      <section className='gallery'>
        <div className='container gallery__container'>
          {images.map((image, index) => (
            <article key={index} onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
      {selectedImage && (
        <ImageModal image={selectedImage} alt="Enlarged Image" closeModal={handleCloseModal} />
      )}
    </>
  );
};

export default Gallery;
