import React from 'react'
import { Link } from 'react-router-dom'
const HolidaySales = () => {
  return (
    <div className=''>
        <div className='bg-orange-500 m-auto w-[95%] p-2 text-center text-white text-2xl'>
<p>Holiday Sale Deals</p>
        </div>
       <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-auto w-[95%]">
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/Holiday-Sale-Triple-Banner/Stock-Up-For_Christmas_300X400.jpg"
              alt="TV & Audio"
              className="w-full h-auto rounded-lg shadow-lg"
            />
         
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/Holiday-Sale-Triple-Banner/Fashion_Gift_300X400.png"
              alt="New Arrival"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-30 relative">
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/Holiday-Sale-Triple-Banner/Home_300X400.png"
              alt="Clearance Sale"
              className="w-full h-auto rounded-lg shadow-lg"
            />
         
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/Holiday-Sale-Triple-Banner/Phone_Gift_300X400.png"
              alt="Appliance Deals"
              className="w-full h-auto rounded-lg shadow-lg"
            />
         
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/Holiday-Sale-Triple-Banner/TV_Audio_300X400.jpg"
              alt="Up to 50% off"
              className="w-full h-auto rounded-lg shadow-lg"
            />
           
          </Link>
          <Link className="flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/Holiday-Sale-Triple-Banner/Beauty-Gift_300X400.png"
              alt="Phones & Tablets Deals"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          
          </Link>
        </div>
    </div>
  )
}

export default HolidaySales
