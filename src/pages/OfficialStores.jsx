import React from "react";
import { Link } from "react-router-dom";

const OfficialStores = () => {
  return (
    <div className="w-[95%] m-auto">
      <div className="bg-blue-950 text-white p-4 text-center">
        <p className="text-2xl font-semibold">Official Stores</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-4 gap-4 bg-white">
        {/* Store 1 */}
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/tecno_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Store 2 */}
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/jameson_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/ace_elec_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/poco_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/300x400-itell-new.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/nivea_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/xiaomi_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/infinix_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/johnnie-walker_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/samsung_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/guinness_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link to="#" className="group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://ng.jumia.is/cms/0-3-official-stores/300x400/bacardi_300x400.png"
              alt="Nivea Store"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OfficialStores;
