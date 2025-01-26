import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ElecOfficialStores = () => {
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
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/led-tvs_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">LED TVs</p>
        </Link>

        {/* Store 2 */}
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/smart-tvs_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Smart TVs</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/32inch-tv_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">32" TVs</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/42inch-tv_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">43" TVs</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/50inch-tvs_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">50" TVs</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/55inch-tv_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">55" TVs</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-6-anniversary/2022/userneeds/inverters_260x144v2.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Inverters</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-5-TechWeek/2022/userneeds/power-up/generators_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Generators</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/home-theatres_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Home Theatres</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/soundbars_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Soundbars</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/tvs-home-audio/portable-speakers_260x144.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <p className="text-center mt-2">Portable Speakers</p>

        </Link>
        <Link to="#" className="group">
          <div className="relative flex justify-center items-center overflow-hidden rounded-lg shadow-md">
            <FaArrowRight
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-[20%] h-24"
            />
          </div>
          <p className="text-center mt-2">Electronic deals</p>

        </Link>
      </div>
    </div>
  );
};

export default ElecOfficialStores;
