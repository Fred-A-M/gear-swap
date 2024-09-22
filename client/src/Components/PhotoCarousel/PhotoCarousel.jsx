/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function PhotoCarousel ({usersPhotos}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = usersPhotos.map(photo => {
    return photo.imageURL;
  });

  console.log(photos);

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
      <img src={photos[currentIndex]} className="w-44 h-44 rounded-lg shadow-md"/>
      <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 hover:bg-gray-100">
        &#10094;
      </button>
      <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 hover:bg-gray-100">
        &#10095;
      </button>
    </div>
    </>
  )
};