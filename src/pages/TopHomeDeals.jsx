import { useState, useRef, useEffect } from "react";
import {
  IoIosPricetag,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { Link } from "react-router-dom";
import Carousel from "../pages/Carousel";

const resources = [
  {
    src: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Smart-Phones/712X384_phones_update.jpg",
    title: "Smartphone Sale",
    price: "499.99",
    cutprice: "454.37",
    left: "200",
  },
  {
    src: "https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/defacto/2024/Nov/50_defacto/712x384.jpg",
    title: "Defacto Fashion",
    price: "499.99",
    cutprice: "454.37",
    left: "20",
  },
  {
    src: "https://ng.jumia.is/cms/0-0-black-friday/2024/Jpay/uba/ube-homepage-slider.jpg",
    title: "Black Friday Deals",
    price: "499.99",
    cutprice: "454.37",
    left: "100",
  },
  {
    src: "https://ng.jumia.is/cms/0-1-christmas-sale/2024/generic/712x384.jpg",
    title: "Christmas Sale",
    price: "499.99",
    cutprice: "454.37",
    left: "160",
  },
  {
    src: "https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/desk712x384.jpg",
    title: "Nivea Special Offer",
    price: "499.99",
    cutprice: "454.37",
    left: "200",
  },
  {
    src: "https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/flash712x384.jpg",
    title: "Nivea Flash Sale",
    price: "499.99",
    cutprice: "454.37",
    left: "200",
  },
  {
    src: "https://ng.jumia.is/cms/0-4-jumia-global/2024/MUSTHC/712.png",
    title: "Global Must-Have",
    price: "499.99",
    cutprice: "454.37",
    left: "200",
  },
  {
    src: "https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/desk712x384.jpg",
    title: "Nivea Brand Days",
    price: "499.99",
    cutprice: "454.37",
    left: "200",
  },
  {
    src: "https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/desk712x384.jpg",
    title: "Nivea Brand Days",
    price: "499.99",
    cutprice: "454.37",
    left: "200",
  },
  {
    src: "https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/desk712x384.jpg",
    title: "Nivea Brand Days",
    price: "499.99",
    cutprice: "454.37",
    left: "200",
  },
];

const TopHomeDeals = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);
  
    const movePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
      }
    };
  
    const moveNext = () => {
      if (
        carousel.current !== null &&
        carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
      ) {
        setCurrentIndex((prevState) => prevState + 1);
      }
    };
  
    const isDisabled = (direction) => {
      if (direction === "prev") {
        return currentIndex <= 0;
      }
  
      if (direction === "next" && carousel.current !== null) {
        return (
          carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        );
      }
  
      return false;
    };
  
    useEffect(() => {
      if (carousel.current !== null) {
        carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
      }
    }, [currentIndex]);
  
    useEffect(() => {
      maxScrollWidth.current = carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0;
    }, []);
  
    return (
      <div className=" m-auto w-[95%] mt-4">
        <div className='bg-orange-500 p-2 flex justify-between items-center text-white font-semibold text-xl mb-0'>
       
       <p className="text-2xl">Top Home  Deals</p>
        <Link className='flex gap-1 items-center'>
          <p>SEE ALL</p>
          <IoIosArrowForward />
        </Link>
      </div>
  
        <div className="carousel my-12 mx-auto mt-0">
          <div className="relative overflow-hidden bg-white p-2">
            <div className="flex justify-between absolute bottom-40 left w-full  bg-white">
              <button
                onClick={movePrev}
                className=" rounded hover:bg-blue-900 text-white w-10 h-full text-center disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
            <div
              ref={carousel}
              className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="carousel-item text-center relative w-full h-   snap-start"
                >
                  {/* Image */}
                  <a
                    href={resource.link}
                    className="h-64 w-64 aspect-square grid "
                  >
                    <img
                      src={resource.src}
                      alt={resource.title}
                      className="w-full object-cover rounded-md p-3"
                    />
  
                    <div className="text-left leading-9 p-1 w-full text-black ">
                      <h3 className="text-xl font-semibold">{resource.title}</h3>
                      <p className="text-lg">#{resource.price}</p>
                      <p className="line-through text-gray-500">
                        {resource.cutprice}
                      </p>
                    </div>
                  </a>
                  {/* Title and Price */}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <Carousel /> */}
      </div>
    );
  };

export default TopHomeDeals
 
