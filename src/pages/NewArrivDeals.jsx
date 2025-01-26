import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewArrivDeals = () => {
  return (
    <div className="w-[95%] m-auto">
      <div className=" p-4 text-center">
        <p className="text-2xl font-semibold">Electronics Deals</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-4 gap-4 bg-white">
        {/* Store 1 */}
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/update/computing.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Gadgets & Computing</p>
        </Link>

        {/* Store 2 */}
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/July/New-Arrival/Artboard_1_copy_5.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Women's Fashion</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/update/DIY.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">DIY & Fitness</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/update/beauty.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Self Care</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/July/New-Arrival/Artboard_1_copy_4.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Men's Fashion</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/update/homes.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Home Essential</p>

        </Link>
        
       
      
        
      </div>
    </div>
  );
};

export default NewArrivDeals;
 
