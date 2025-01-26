import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className=" h-auto w-[full] m-auto">
      <Slider {...settings}>
        <div className=" ">
          <div className=" shadow-md ">
            <img
              src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Smart-Phones/712X384_phones_update.jpg"
              alt="Product 1"
              className=" rounded-lg w-full"
            />
          </div>
        </div>
        <div>
          <div className="  shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/itel/2024/december/updated/712-x-384.jpg"
              alt="Product 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div>
          <div className=" -md">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Jpay/uba/ube-homepage-slider.jpg"
              alt="Product 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div>
          <div className=" bg-white rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/generic/712x384.jpg"
              alt="Product 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div>
          <div className=" bg-white rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/desk712x384.jpg"
              alt="Product 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
       
        <div>
          <div className=" bg-white rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Guiness/712X384.png"
              alt="Product 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        {/* Add more products */}
      </Slider>
    </div>
  );
};

export default HeroSlider;
