import React, { useState } from 'react';
import i1 from '../dist/img/g1.png';
import i2 from '../dist/img/g2.png';
import i3 from '../dist/img/g3.png';
import i4 from '../dist/img/g4.png';
import i5 from '../dist/img/g5.png';
import './gallery.css'


const images = [
  i2,
  i1,
  i3,
  i4,
  i5,
];

const Gallery = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  
  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
     
      <div className="gallery-image-container">
        <button className="gallery-button gallery-button-prev" onClick={goToPrevious}>←</button>
        <img src={images[currentIndex]} alt="Imagen de galería" style={{ width: '200px', height: 'auto' }} />
        <button className="gallery-button gallery-button-next" onClick={goToNext}>→</button>
      </div>
    </div>
  );
  
  
};

export default Gallery;