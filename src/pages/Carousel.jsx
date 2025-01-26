import { useState, useRef, useEffect } from "react";

// Data
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

const Carousel = () => {
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
    <div className="carousel my-12 mx-auto mt-0 p-4">
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
              className="carousel-item text-center relative w-full h-96  p-2 snap-start"
            >
              {/* Image */}
              <a
                href={resource.link}
                className="h-full w-full aspect-square block  "
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

                  <div className="w-full rounded mt-2">
  <p className={`mt-2 ${resource.left < 50 ? 'text-red-500' : 'text-gray-700'}`}>
    {resource.left} left
  </p>
  <div className="bg-gray-300 w-full h-2 rounded">
    <div
      className={`h-2 rounded ${resource.left < 50 ? 'bg-red-600' : 'bg-orange-500'}`}
      style={{ width: `${(resource.left / 200) * 100}%` }}
    ></div>
  </div>
</div>

                </div>
              </a>
              {/* Title and Price */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
