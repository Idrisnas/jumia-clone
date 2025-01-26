import React from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  return (
    <div>
      <div className="bg-black p-2 m-auto w-[95%]">
        <p className="text-center text-2xl font-bold text-white">
          Shop By Category
        </p>
      </div>

      <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-auto w-[95%] text-white">
        <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
          <img
            src="https://ng.jumia.is/cms/0-1-category-pages/electronics/0-televisions/smart-tvs_300x400.png"
            alt="TV & Audio"
            className="w-full h-auto rounded-lg  shadow-lg"
          />
         
        </Link>
        <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
          <img
            src="https://ng.jumia.is/cms/0-1-category-pages/electronics/300x400/inverters_300x400.png"
            alt="New Arrival"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        
        </Link>
        <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
          <img
            src="https://ng.jumia.is/cms/0-1-category-pages/electronics/0-televisions/led-tvs_300x400.png"
            alt="Clearance Sale"
            className="w-full h-auto rounded-lg shadow-lg"
          />
      
        </Link>
        <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
          <img
            src="https://ng.jumia.is/cms/0-1-category-pages/electronics/0-home-audio/home-theatres_300x400.png"
            alt="Appliance Deals"
            className="w-full h-auto rounded-lg shadow-lg"
          />
         
        </Link>
        <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
          <img
            src="https://ng.jumia.is/cms/0-1-category-pages/electronics/0-home-audio/soundbars_300x400.png"
            alt="Up to 50% off"
            className="w-full h-auto rounded-lg shadow-lg"
          />
         
        </Link>
        <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
          <img
            src="https://ng.jumia.is/cms/0-1-category-pages/electronics/300x400/generators_300x400.png"
            alt="Phones & Tablets Deals"
            className="w-full h-auto rounded-lg shadow-lg"
          />
         
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategory;
