import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/stag-and-strath.JPG';
import ImageModal from '../../components/ImageModal';
import ImageCarousel from '../../components/ImageCarousel';
import './Gallery.css';

const Gallery = () => {
  const galleryLength = 11;
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index); // Update the currentIndex with the clicked image's index
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Beatae non repudiandae ducimus repellendus cupiditate unde. Temporibus eius fugit quis nihil.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => (
            <article key={index} onClick={() => handleImageClick(image, index)}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
      {selectedImage && (
        <ImageModal
          images={images}
          alt="Enlarged Image"
          closeModal={handleCloseModal}
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
      {/* <ImageCarousel images={images} />   */}
    </>
  );
};

export default Gallery;

