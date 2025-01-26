import React from 'react'
import { Link } from 'react-router-dom'

const BeautyDeals = () => {
  return (

   <div>

<div className='bg-orange-500 p-2 m-auto w-[95%]'>
<p className='text-center text-2xl font-bold text-white'>Beauty Deals</p>
</div>

<div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-auto w-[95%] text-white">
    <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
      <img
        src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png"
        alt="TV & Audio"
        className="w-full h-auto rounded-lg  shadow-lg"
      />
      <p className="text-center mt-2 mb-1  font-medium text-lg text-white bg- absolute bottom-0 w-full p-2 bg-black bg-opacity-50">
        TV & Audio Deals
      </p>
    </Link>
    <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
      <img
        src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/7.gif"
        alt="New Arrival"
        className="w-full h-auto rounded-lg shadow-lg"
      />
     <p className="text-center mt-2 mb-1  font-medium text-lg  bg- absolute bottom-0 w-full p-2 bg-black bg-opacity-50">
        TV & Audio Deals
      </p>
    </Link>
    <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
      <img
        src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/clearance.png"
        alt="Clearance Sale"
        className="w-full h-auto rounded-lg shadow-lg"
      />
     <p className="text-center mt-2 mb-1  font-medium text-lg  bg- absolute bottom-0 w-full p-2 bg-black bg-opacity-50">
        TV & Audio Deals
      </p>
    </Link>
    <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
      <img
        src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png"
        alt="Appliance Deals"
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <p className="text-center mt-2 mb-1  font-medium text-lg   absolute bottom-0 w-full p-2 bg-black bg-opacity-50">
        TV & Audio Deals
      </p>
    </Link>
    <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
      <img
        src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/BUY-2_updated.gif"
        alt="Up to 50% off"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    <p className="text-center mt-2 mb-1  font-medium text-lg   absolute bottom-0 w-full p-2 bg-black bg-opacity-50">
        TV & Audio Deals
      </p>
    </Link>
    <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
      <img
        src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png"
        alt="Phones & Tablets Deals"
        className="w-full h-auto rounded-lg shadow-lg"
      />
     <p className="text-center mt-2 mb-1  font-medium text-lg  bg- absolute bottom-0 w-full p-2 bg-black bg-opacity-50">
        TV & Audio Deals
      </p>
    </Link>
  </div>
   </div>
  )
}

export default BeautyDeals
