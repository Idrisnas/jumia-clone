import React from 'react'
import { Link } from 'react-router-dom'
const HomeDeals = () => {
  return (
    <div className=''>
        <div className='bg-orange-500 m-auto w-[95%] p-2 text-center text-white text-2xl'>
<p>Home Deals</p>
        </div>
       <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-auto w-[95%]">
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png"
              alt="TV & Audio"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          <button className=" absolute bottom-12 font-bold text-lg text-white bg-orange-500 p-2 rounded">
              Beauty Gift
            </button>
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/7.gif"
              alt="New Arrival"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          <button className=" absolute bottom-10 font-bold text-lg text-white bg-orange-500 p-2 rounded">
              Beauty Gift
            </button>
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-30 relative">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/clearance.png"
              alt="Clearance Sale"
              className="w-full h-auto rounded-lg shadow-lg"
            />
           <button className=" absolute bottom-10 font-bold text-lg text-white bg-orange-500 p-2 rounded">
              Beauty Gift
            </button>
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png"
              alt="Appliance Deals"
              className="w-full h-auto rounded-lg shadow-lg"
            />
           <button className=" absolute bottom-10 font-bold text-lg text-white bg-orange-500 p-2 rounded">
              Beauty Gift
            </button>
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/BUY-2_updated.gif"
              alt="Up to 50% off"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button className=" absolute bottom-10 font-bold text-lg text-white bg-orange-500 p-2 rounded">
              Beauty Gift
            </button>
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png"
              alt="Phones & Tablets Deals"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button className=" absolute bottom-10 font-bold text-lg text-white bg-orange-500 p-2 rounded">
              Beauty Gift
            </button>
          </Link>
        </div>
    </div>
  )
}

export default HomeDeals
