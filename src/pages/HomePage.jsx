import React from "react";
import { Link } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import ImageCarousel from "../components/ImageCarousel";
import Carousel from "../pages/Carousel";
import FlashSales from "../pages/FlashSales";
import SponsordProducts from "../pages/SponsordProducts";
import LimitedStock from "./LimitedStock";
import HolidaySales from "./HolidaySales";
import TopHoliday from "./TopHoliday";
import AppliancesDeals from "./AppliancesDeals";
import TopAppliance from "./TopApplianceDeals";
import EverthingMust from "./EverthingMust";
import TopSeling from "./TopSeling";
import LastViewed from "./LastViewed";
import OfficialStores from "./OfficialStores";
import GuinessStore from "./GuinessStore";
import ItelStores from "./ItelStores";
import HomeDeals from "./HomeDeals";
import TopHomeDeals from "./TopHomeDeals";
import BeautyDeals from "./BeautyDeals";
import TopBeautyDeals from "./TopBeautyDeals";
import FashionDeals from "./FashionDeals";
import TopFashionDeals from "./TopFashionDeals";
import TopSearched from "./TopSearched";
import HandPicked from "./Handpicked";
import Information from "./Information";
import HeroSlider from "./HeroSlider";

const HomePage = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center mt-16"
        style={{
          backgroundImage:
            'url("https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Nivea/BGTAKEOVERNIVEA.jpg")',
        }}
      >
        <div className="flex gap-6 p-10">
          {/* Sidebar */}
          <div className="bg-white  shadow-md  w-1/5">
            <SideNavBar />
          </div>

          {/* Image Carousel */}
          <div className="flex-1 w-[60%]   shadow-md rounded-lg">
            <HeroSlider />
          </div>

          {/* Right Sectifon */}
          <div className="flex flex-col gap-4">
            <div className="h-[50%] bg-white shadow-md rounded-lg p-4">
              {/* Call to Order */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://ng.jumia.is/cms/0-1-homepage/bsb/phone-icon-1.png"
                  alt="Phone Icon"
                  className="w-8 h-8"
                />
                <div>
                  <p className="font-bold text-gray-700">CALL TO ORDER</p>
                  <p className="text-gray-500">0700-600-0000, 0201888...</p>
                </div>
              </div>

              {/* Other Links */}
              <div className="space-y-4">
                <Link className="flex items-center gap-4">
                  <img
                    src="https://ng.jumia.is/cms/0-1-homepage/bsb/icone-seller-1.png"
                    alt="Seller Icon"
                    className="w-8 h-8"
                  />
                  <span>Sell on Jumia</span>
                </Link>
                <Link className="flex items-center gap-4">
                  <img
                    src="https://ng.jumia.is/cms/0-1-homepage/bsb/icone-2-return.png"
                    alt="Best Deals Icon"
                    className="w-8 h-8"
                  />
                  <span>Best Deals</span>
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/Untitled-3.gif"
                alt=""
                className="h-[100%] w-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-auto w-[95%]">
          <Link
            to={"/electronics"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png"
              alt="TV & Audio"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              TV & Audio Deals
            </p>
          </Link>
          <Link
            to={"/newarrival"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/7.gif"
              alt="New Arrival"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              New Arrival
            </p>
          </Link>
          <Link
            to={"/clearance"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/clearance.png"
              alt="Clearance Sale"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Clearance Sale
            </p>
          </Link>
          <Link
            to={"/appdeals"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png"
              alt="Appliance Deals"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Appliance Deals
            </p>
          </Link>
          <Link
            to={"/updiscount"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/BUY-2_updated.gif"
              alt="Up to 50% off"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Up to 50% Off
            </p>
          </Link>
          <Link
            to={"/phones&tab"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png"
              alt="Phones & Tablets Deals"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Phones & Tablets Deals
            </p>
          </Link>
        </div>
        <FlashSales />

        <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-auto w-[95%]">
          <Link
            to={"/electronics"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/essential-week.png"
              alt="Essential"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Up to 80% Off
            </p>
          </Link>
          <Link
            to={"/newarrival"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/beauty.png"
              alt="Beauty Desk"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Beauty Desk
            </p>
          </Link>
          <Link
            to={"/clearance"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/fashion.png"
              alt="Fashion Deals"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Fashion Deals
            </p>
          </Link>
          <Link
            to={"/appdeals"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/special-offer.png"
              alt="Special Offer"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Special Offer
            </p>
          </Link>
          <Link
            to={"/updiscount"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/home-essentials.png"
              alt="home-essentials"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Home Essentials
            </p>
          </Link>
          <Link
            to={"/phones&tab"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/300X300_CompT.jpg"
              alt="              Computing Deals
"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Computing Deals
            </p>
          </Link>
        </div>
        <SponsordProducts />

        <div className="">
          <TopSeling />
          <LimitedStock />
          <HolidaySales />
          <TopHoliday />
          <AppliancesDeals />
          <TopAppliance />

          <div className="mb-3 w-[95%] m-auto bg-white p-1 flex gap-2">
            <Link className="relative w-full">
              <div className="p-1 relative overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/generic/Holiday_Sales_572x250.png"
                  alt="Holiday Sales"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </Link>
            <Link className="relative w-full">
              <div className="p-1 relative overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/Brand-Days/Poco/DesktopDoublebanner572pxx250px.jpg"
                  alt="Poco Brand Days"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3 w-[95%] m-auto bg-white p-1 flex gap-2">
            <Link className="relative w-full">
              <div className="p-1 relative overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://ng.jumia.is/cms/0-1-initiatives/Magic-hour/September/572X250-1.jpg"
                  alt="Holiday Sales"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </Link>
            <Link className="relative w-full">
              <div className="p-1 relative overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/November/33PERCENT_Off/33percent_572x250.png"
                  alt="Poco Brand Days"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </Link>
          </div>

          <EverthingMust />
          <TopSeling />
          <div className="mb-3 w-[95%] m-auto bg-white p-1 flex gap-2">
            <Link className=" relative w-full">
              <div className="p-1 relative overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/generic/Color-Block_Testing/Updated/Holiday-sale-Updated-1152-x-252.gif"
                  alt=""
                  className="w-full  h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </Link>
          </div>
          <LastViewed />
          <OfficialStores />
          <GuinessStore />
          <ItelStores />
          <HomeDeals />
          <TopHomeDeals />
          <BeautyDeals />
          <TopBeautyDeals />
          <FashionDeals />
          <TopFashionDeals />
          <TopSearched />
          <HandPicked />
          <Information />
        </div>
      </div>
    </>
  );
};

export default HomePage;
