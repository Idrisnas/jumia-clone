import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const LimitedElectronics = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const resources = [
    {
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/8797052/1.jpg?4457",
      title: 'Hikers 32" Frameless Andriod',
      price: "349.999",
      cutprice: "190.000",
      left: "200",
      slash: "", // Add link if needed
    },
    {
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/9154611/1.jpg?7494",
      title: "UFC 43'' inches FRAMELESS sm..",
      price: "218.99",
      cutprice: "754.37",
      left: "20",
      slash: "-27", // Add link if needed
      // Add link if needed
    },
    {
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/6198852/1.jpg?8294",
      title: "UFC 43'' inch 4K Ultra-HD Smart.. ",
      price: "499.99",
      cutprice: "454.37",
      left: "100",
      slash: "", // Add link if needed
    },
    {
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/8098852/1.jpg?5329",
      title: "Christmas Sale",
      price: "499.99",
      cutprice: "454.37",
      left: "160",
      slash: "-27", // Add link if needed
    },
    {
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/1412592/1.jpg?2876",
      title: "Nivea Special Offer",
      price: "499.99",
      cutprice: "454.37",
      left: "200",
      slash: "-27", // Add link if needed
    },
    {
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/6539021/1.jpg?3382",
      title: "Nivea Flash Sale",
      price: "499.99",
      cutprice: "454.37",
      left: "200",
      slash: "-27", // Add link if needed
    },
    {
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/3039021/1.jpg?4217",
      title: "Global Must-Have",
      price: "499.99",
      cutprice: "454.37",
      left: "200",
      slash: "-45", // Add link if needed
    },
    {
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/7383912/1.jpg?9846",
      title: "Nivea Brand Days",
      price: "499.99",
      cutprice: "454.37",
      left: "200",
      slash: "-74", // Add link if needed
    },
    {
        src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/530977/1.jpg?1158",
        title: "Nivea Brand Days",
        price: "499.99",
        cutprice: "454.37",
        left: "200",
        slash: "-74", // Add link if needed
      },
      {
        src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/593164/1.jpg?6899",
        title: "Nivea Brand Days",
        price: "499.99",
        cutprice: "454.37",
        left: "200",
        slash: "-74", // Add link if needed
      },
  ];

  return (
    <div>
    <div className="bg-white h-auto w-full ">

    <div className='bg-orange-500 p-2 flex justify-between items-center text-white font-semibold text-xl mb-0'>
       
       <p className="text-2xl" >Limited Stock Deals</p>
        <Link className='flex gap-1 items-center'>
          <p>See All</p>

          <IoIosArrowForward />
        </Link>
      </div>
       
      <Slider {...settings}>
        {resources.map((resource, index) => (
          <div
            key={index}
            className="carousel-item text-center relative w-full"
          >
            {/* Image */}
            
            <Link className=" w-full aspect-square grid group relative hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
  {/* Image Container */}
  <div className="relative">
    <img
      src={resource.src}
      alt={resource.title}
      className="w-full h-full object-cover rounded-md p-3 transition-transform duration-300 group-hover:scale-105"
    />
    {/* Slash Badge */}
    {resource.slash && (
      <p className="text-orange-500 bg-orange-100 p-2 w-10 absolute top-0 right-0 rounded-bl-md text-xs font-semibold">
        {resource.slash}
      </p>
    )}
  </div>
  
  {/* Text Content */}
  <div className="text-left leading-9 p-4 w-full text-black">
    <h3 className="text-xl font-semibold">{resource.title}</h3>
    <p className="text-lg text-gray-700">#{resource.price}</p>
    <p className="line-through text-gray-500">{resource.cutprice}</p>
  </div>
</Link>
            {/* Title and Price */}
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default LimitedElectronics;
