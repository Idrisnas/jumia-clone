import React, { useState,useEffect }from 'react'

const ImageCarousel = () => {
    const images = [
        "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Smart-Phones/712X384_phones_update.jpg",
        "https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/defacto/2024/Nov/50_defacto/712x384.jpg",
        "https://ng.jumia.is/cms/0-0-black-friday/2024/Jpay/uba/ube-homepage-slider.jpg",
        "https://ng.jumia.is/cms/0-1-christmas-sale/2024/generic/712x384.jpg",
        "https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/desk712x384.jpg",
        "https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/flash712x384.jpg",
        "https://ng.jumia.is/cms/0-4-jumia-global/2024/MUSTHC/712.png",
        "https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/desk712x384.jpg"
      ];
    
      // State to track the current image index
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Function to go to the next image
      const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      // Function to go to the previous image
      const prevImage = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };

      useEffect(() => {
        const autoplay = setInterval(nextImage, 4000); 
        return () => clearInterval(autoplay); 
      }, []);
    
      return (
        <div className="relative w-full max-w-lg mx-auto h-[90%] rounded  md:w-[100%] ">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full md:w-[100%]  h-[400px]   rounded-lg shadow-lg"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-500 p-2 rounded-full"
          >
            &#8249;
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-500 p-2 rounded-full"
          >
            &#8250;
          </button>
        </div>
      );
}

export default ImageCarousel


