import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import LimitedElectronics from "./LimitedElectronics";
import CategoriesNav from "../components/CategoriesNav";
import FProductPage from "../components/FproductPage";



const AppDeals = () => {
 

  

  return (
    <div className=" bg-gray-100 mt-20">
      <div className="w-[95%] m-auto">
        <div className="flex items-center gap-3 p-2">
          <Link to={"/"}>Home</Link>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <Link to={"/electronics"}>Electronics</Link>
        </div>
        
        {/* Banner Image */}
        <div>
          <img
            src="https://tpc.googlesyndication.com/simgad/7862583851039848415"
            alt="electronics advertisement"
            className="w-full h-auto rounded-lg shadow-lg "
          />
        </div>

        {/* Section Title */}
        <div className="bg-white text-center p-4 my-4 shadow-md rounded-lg">
          <p className="text-2xl font-semibold">Electronics</p>
        </div>

        {/* Call to Order Section */}
        <div className="bg-orange-300 text-center p-4 my-4">
          <p className="text-white text-lg font-semibold">
            CALL TO ORDER: 07006000000
          </p>
        </div>
        <FProductPage />

       <LimitedElectronics />
       <div className="mt-3">


<CategoriesNav  />

       </div>
      </div>
    </div>
  );
};

export default AppDeals;
