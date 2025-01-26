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
    src: "https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/defacto/2024/Nov/50_defacto/712x384.jpg",
    title: "Defacto Fashion",
    price: "499.99",
    cutprice: "454.37",
    left: "20",
  },
  // Add more items as needed
];

const LastViewed = () => {
  return (
    <div className="m-auto w-[95%] mt-4 bg-white">
      <div className='bg-white p-2 flex justify-between items-center text-white font-semibold text-xl mb-0'>
        <p className="text-2xl text-black">Last Viewed</p>
        <Link className='flex gap-1 items-center text-orange-500'>
          <p>SEE ALL</p>
          <IoIosArrowForward />
        </Link>
      </div>

      <div className="my-12 mx-auto mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-md shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg p-2"
            >
              <img
                src={resource.src}
                alt={resource.title}
                className="object-cover w-full h-56"
              />
              
              <div className="p-3">
                <h3 className="text-xl font-semibold text-black">{resource.title}</h3>
                <p className="text-lg text-black">#{resource.price}</p>
                <p className="line-through text-gray-500">{resource.cutprice}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastViewed;
