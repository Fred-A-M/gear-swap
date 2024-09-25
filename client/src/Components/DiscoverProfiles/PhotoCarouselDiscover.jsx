/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function PhotoCarousel ({usersGear}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = usersGear.map(photo => {
    return photo.imageURL;
  });

  const nextImage = (event) => {
    event.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };
  
  const prevImage = (event) => {
    event.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
    <div className="relative w-full max-w-lg mx-auto">
      {!photos[currentIndex] ? <img src='/src/assets/logo2.jpeg' className="w-44 h-44 rounded-full shadow-md"/> :
      <img src={photos[currentIndex]} className="w-44 h-44 rounded-lg shadow-md"/>}
      {photos.length > 1 && <>
      <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 hover:bg-gray-100">
      &#10094;
      </button>
      <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 hover:bg-gray-100">
        &#10095;
      </button> </>}
    </div>
    </>
  )
};