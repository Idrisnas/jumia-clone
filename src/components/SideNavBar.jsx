import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosFlashlight, IoIosPhonePortrait, IoIosTv } from "react-icons/io";
import { GiHealthPotion } from "react-icons/gi";
import { LuPackage2 } from "react-icons/lu";
import { TbDotsCircleHorizontal } from "react-icons/tb";

const SideNavBar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleHover = (link) => {
    setHoveredLink(link);
  };

  return (
    <div className=" text-gray-700 w-[100%]">
      <ul className=" text-sm ">
        {/* Appliances Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("appliances")}
            onMouseLeave={() => handleHover(null)}
          >
            <LuPackage2 className="font-bold mr-2" />
            Appliances
          </Link>

          {/* Dropdown Modal for Appliances */}
          {hoveredLink === "appliances" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("appliances")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-37px] absolute bg-white gap-4 py-1 px-3 mb-1 h-[410px] w-[80%]">
                {/* Small Appliances */}
                <div>
                  <Link className="font-semibold text-lg mb-4 py-2 border-b-2 border-gray-200 hover:text-orange-500 ">
                    SMALL APPLIANCES
                  </Link>
                  <ul className="space-y-1 mt-3 flex flex-col">
                    <Link to="#" className="hover:font-bold">
                      Blenders
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Deep Fryers
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Juicers
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Rice Cookers
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Toasters & Ovens
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Microwaves
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Bundles
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Vaccum Cleaners
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Yam Pounders
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Irons
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Electric Cookware
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Electric Drink Mixers
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Food Procersors
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Coffee Makers
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Electric Ressure
                    </Link>
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <Link className="font-semibold text-lg mb-4  border-b-2 border-gray-200 hover:text-orange-500">
                    LARGE APPLIANCES
                  </Link>
                  <ul className="space-y-1 mt-3 flex flex-col">
                    <Link to="#" className="hover:font-bold">
                      Washing Machines
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Fridges
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Freezers
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Air Conditioners
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Heaters
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Fans
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Air Purifirs
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Water Dispensers
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Generators & Inveters
                    </Link>
                    <Link to="#" className="hover:font-bold"></Link>
                    <Link to="#" className="hover:font-bold"></Link>
                    <Link to="#" className="hover:font-bold"></Link>
                    <Link to="#" className="hover:font-bold"></Link>
                    <Link to="#" className="hover:font-bold"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <Link className="font-semibold text-lg mb-2  border-b-2 border-gray-200 hover:text-orange-500">
                    BRANDS
                  </Link>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#" className="hover:font-bold">
                      Nexus
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Hisense
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      Polystar
                    </Link>
                    <Link to="#" className="hover:font-bold">
                      TCL
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Phone and Stuff Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("phoneStuff")}
            onMouseLeave={() => handleHover(null)}
          >
            <IoIosPhonePortrait className="font-bold mr-2" />
            Phone and Stuff
          </Link>

          {/* Dropdown Modal for Phone and Stuff */}
          {hoveredLink === "phoneStuff" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("phoneStuff")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-72px] absolute bg-white gap-4 py-4 px-3 h-[410px] mb-1 w-[80%]">
                {/* Small Appliances */}
                <div>
                  <Link className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                   MOBILE PHONES
                  </Link>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Smartphones</Link>
                    <Link to="#">Andriod Phones</Link>
                    <Link to="#">IPhones</Link>
                    <Link to="#">Basic Phones </Link>
                    <Link to="#">Refurbished Phones </Link>
                    <Link to="#">Rugged Phones</Link>
                    <Link to="#">Cordless Telephones</Link>
                    <Link to="#">Dual Sim Phones</Link>
                   
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    CHARGERE
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Washing Machines</Link>
                    <Link to="#">Fridges</Link>
                    <Link to="#">Freezers</Link>
                    <Link to="#">Air Conditioners</Link>
                    <Link to="#">Heaters</Link>
                    <Link to="#">Fans</Link>
                    <Link to="#">Air Purifirs</Link>
                    <Link to="#">Water Dispensers</Link>
                    <Link to="#">Generators & Inveters</Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    BRANDS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Nexus</Link>
                    <Link to="#">Hisense</Link>
                    <Link to="#">Polystar</Link>
                    <Link to="#">TCL</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Health Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("Health")}
            onMouseLeave={() => handleHover(null)}
          >
            <GiHealthPotion className="font-bold mr-2" />
            Health & Beauty
          </Link>

          {/* Dropdown Modal for Fashion */}
          {hoveredLink === "Health" && (
            <div
              className="relative z-30  left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("Health")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-108px] absolute bg-white gap-4 p-4 h-[410px] w-[80%]">
                {/* Small Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                    SMALL APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Blenders</Link>
                    <Link to="#">Deep Fryers</Link>
                    <Link to="#">Juicers</Link>
                    <Link to="#">Rice Cookers</Link>
                    <Link to="#">Toasters & Ovens</Link>
                    <Link to="#">Microwaves</Link>
                    <Link to="#">Bundles</Link>
                    <Link to="#">Vaccum Cleaners</Link>
                    <Link to="#">Yam Pounders</Link>
                    <Link to="#">Irons</Link>
                    <Link to="#">Electric Cookware</Link>
                    <Link to="#">Electric Drink Mixers</Link>
                    <Link to="#">Food Procersors</Link>
                    <Link to="#">Coffee Makers</Link>
                    <Link to="#">Electric Ressure</Link>
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    LARGE APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Washing Machines</Link>
                    <Link to="#">Fridges</Link>
                    <Link to="#">Freezers</Link>
                    <Link to="#">Air Conditioners</Link>
                    <Link to="#">Heaters</Link>
                    <Link to="#">Fans</Link>
                    <Link to="#">Air Purifirs</Link>
                    <Link to="#">Water Dispensers</Link>
                    <Link to="#">Generators & Inveters</Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    BRANDS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Nexus</Link>
                    <Link to="#">Hisense</Link>
                    <Link to="#">Polystar</Link>
                    <Link to="#">TCL</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Other Links */}
        {/* Electronic  Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("Electronics")}
            onMouseLeave={() => handleHover(null)}
          >
            <IoIosTv className="font-bold mr-2" />
            Electronics
          </Link>

          {/* Dropdown Modal for Fashion */}
          {hoveredLink === "Electronics" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700  bg-red-500"
              onMouseEnter={() => handleHover("Electronics")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-144px] absolute bg-white gap-4 p-4 h-[410px] w-[80%]">
                {/* Small Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                    SMALL APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Blenders</Link>
                    <Link to="#">Deep Fryers</Link>
                    <Link to="#">Juicers</Link>
                    <Link to="#">Rice Cookers</Link>
                    <Link to="#">Toasters & Ovens</Link>
                    <Link to="#">Microwaves</Link>
                    <Link to="#">Bundles</Link>
                    <Link to="#">Vaccum Cleaners</Link>
                    <Link to="#">Yam Pounders</Link>
                    <Link to="#">Irons</Link>
                    <Link to="#">Electric Cookware</Link>
                    <Link to="#">Electric Drink Mixers</Link>
                    <Link to="#">Food Procersors</Link>
                    <Link to="#">Coffee Makers</Link>
                    <Link to="#">Electric Ressure</Link>
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    LARGE APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Washing Machines</Link>
                    <Link to="#">Fridges</Link>
                    <Link to="#">Freezers</Link>
                    <Link to="#">Air Conditioners</Link>
                    <Link to="#">Heaters</Link>
                    <Link to="#">Fans</Link>
                    <Link to="#">Air Purifirs</Link>
                    <Link to="#">Water Dispensers</Link>
                    <Link to="#">Generators & Inveters</Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    BRANDS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Nexus</Link>
                    <Link to="#">Hisense</Link>
                    <Link to="#">Polystar</Link>
                    <Link to="#">TCL</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Fashion  Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("Fashion")}
            onMouseLeave={() => handleHover(null)}
          >
            <IoIosTv className="font-bold mr-2" />
            Fashion
          </Link>

          {/* Dropdown Modal for Fashion */}
          {hoveredLink === "Fashion" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("Fashion")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-180px] absolute bg-white gap-4 p-4 w-[80%] h-[410px]">
                {/* Small Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                    SMALL APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Blenders</Link>
                    <Link to="#">Deep Fryers</Link>
                    <Link to="#">Juicers</Link>
                    <Link to="#">Rice Cookers</Link>
                    <Link to="#">Toasters & Ovens</Link>
                    <Link to="#">Microwaves</Link>
                    <Link to="#">Bundles</Link>
                    <Link to="#">Vaccum Cleaners</Link>
                    <Link to="#">Yam Pounders</Link>
                    <Link to="#">Irons</Link>
                    <Link to="#">Electric Cookware</Link>
                    <Link to="#">Electric Drink Mixers</Link>
                    <Link to="#">Food Procersors</Link>
                    <Link to="#">Coffee Makers</Link>
                    <Link to="#">Electric Ressure</Link>
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    LARGE APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Washing Machines</Link>
                    <Link to="#">Fridges</Link>
                    <Link to="#">Freezers</Link>
                    <Link to="#">Air Conditioners</Link>
                    <Link to="#">Heaters</Link>
                    <Link to="#">Fans</Link>
                    <Link to="#">Air Purifirs</Link>
                    <Link to="#">Water Dispensers</Link>
                    <Link to="#">Generators & Inveters</Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    BRANDS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Nexus</Link>
                    <Link to="#">Hisense</Link>
                    <Link to="#">Polystar</Link>
                    <Link to="#">TCL</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Supermarket  Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("Supermarket")}
            onMouseLeave={() => handleHover(null)}
          >
            <IoIosTv className="font-bold mr-2" />
            Supermarket
          </Link>

          {/* Dropdown Modal for Fashion */}
          {hoveredLink === "Supermarket" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("Supermarket")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-217px] absolute bg-white gap-4 p-4 h-[410px] w-[80%]">
                {/* Small Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                    SMALL APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Blenders</Link>
                    <Link to="#">Deep Fryers</Link>
                    <Link to="#">Juicers</Link>
                    <Link to="#">Rice Cookers</Link>
                    <Link to="#">Toasters & Ovens</Link>
                    <Link to="#">Microwaves</Link>
                    <Link to="#">Bundles</Link>
                    <Link to="#">Vaccum Cleaners</Link>
                    <Link to="#">Yam Pounders</Link>
                    <Link to="#">Irons</Link>
                    <Link to="#">Electric Cookware</Link>
                    <Link to="#">Electric Drink Mixers</Link>
                    <Link to="#">Food Procersors</Link>
                    <Link to="#">Coffee Makers</Link>
                    <Link to="#">Electric Ressure</Link>
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    LARGE APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Washing Machines</Link>
                    <Link to="#">Fridges</Link>
                    <Link to="#">Freezers</Link>
                    <Link to="#">Air Conditioners</Link>
                    <Link to="#">Heaters</Link>
                    <Link to="#">Fans</Link>
                    <Link to="#">Air Purifirs</Link>
                    <Link to="#">Water Dispensers</Link>
                    <Link to="#">Generators & Inveters</Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    BRANDS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Nexus</Link>
                    <Link to="#">Hisense</Link>
                    <Link to="#">Polystar</Link>
                    <Link to="#">TCL</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Computing  Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("Computing")}
            onMouseLeave={() => handleHover(null)}
          >
            <IoIosTv className="font-bold mr-2" />
            Computing
          </Link>

          {/* Dropdown Modal for Fashion */}
          {hoveredLink === "Computing" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("Computing")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-252px] absolute bg-white gap-4 p-4 h-[410px] w-[80%]">
                {/* Small Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                    SMALL APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Blenders</Link>
                    <Link to="#">Deep Fryers</Link>
                    <Link to="#">Juicers</Link>
                    <Link to="#">Rice Cookers</Link>
                    <Link to="#">Toasters & Ovens</Link>
                    <Link to="#">Microwaves</Link>
                    <Link to="#">Bundles</Link>
                    <Link to="#">Vaccum Cleaners</Link>
                    <Link to="#">Yam Pounders</Link>
                    <Link to="#">Irons</Link>
                    <Link to="#">Electric Cookware</Link>
                    <Link to="#">Electric Drink Mixers</Link>
                    <Link to="#">Food Procersors</Link>
                    <Link to="#">Coffee Makers</Link>
                    <Link to="#">Electric Ressure</Link>
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    LARGE APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Washing Machines</Link>
                    <Link to="#">Fridges</Link>
                    <Link to="#">Freezers</Link>
                    <Link to="#">Air Conditioners</Link>
                    <Link to="#">Heaters</Link>
                    <Link to="#">Fans</Link>
                    <Link to="#">Air Purifirs</Link>
                    <Link to="#">Water Dispensers</Link>
                    <Link to="#">Generators & Inveters</Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    BRANDS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Nexus</Link>
                    <Link to="#">Hisense</Link>
                    <Link to="#">Polystar</Link>
                    <Link to="#">TCL</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Baby  Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("Baby")}
            onMouseLeave={() => handleHover(null)}
          >
            <IoIosTv className="font-bold mr-2" />
            Baby Products
          </Link>

          {/* Dropdown Modal for Fashion */}
          {hoveredLink === "Baby" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("Baby")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-289px] absolute bg-white gap-4 p-4 h-[410px] w-[80%]">
                {/* Small Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                    SMALL APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Blenders</Link>
                    <Link to="#">Deep Fryers</Link>
                    <Link to="#">Juicers</Link>
                    <Link to="#">Rice Cookers</Link>
                    <Link to="#">Toasters & Ovens</Link>
                    <Link to="#">Microwaves</Link>
                    <Link to="#">Bundles</Link>
                    <Link to="#">Vaccum Cleaners</Link>
                    <Link to="#">Yam Pounders</Link>
                    <Link to="#">Irons</Link>
                    <Link to="#">Electric Cookware</Link>
                    <Link to="#">Electric Drink Mixers</Link>
                    <Link to="#">Food Procersors</Link>
                    <Link to="#">Coffee Makers</Link>
                    <Link to="#">Electric Ressure</Link>
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    LARGE APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Washing Machines</Link>
                    <Link to="#">Fridges</Link>
                    <Link to="#">Freezers</Link>
                    <Link to="#">Air Conditioners</Link>
                    <Link to="#">Heaters</Link>
                    <Link to="#">Fans</Link>
                    <Link to="#">Air Purifirs</Link>
                    <Link to="#">Water Dispensers</Link>
                    <Link to="#">Generators & Inveters</Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    BRANDS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Nexus</Link>
                    <Link to="#">Hisense</Link>
                    <Link to="#">Polystar</Link>
                    <Link to="#">TCL</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Gaming  Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("Gaming")}
            onMouseLeave={() => handleHover(null)}
          >
            <IoIosTv className="font-bold mr-2" />
            Gaming
          </Link>

          {/* Dropdown Modal for Fashion */}
          {hoveredLink === "Gaming" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("Gaming")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-324px] absolute bg-white gap-4 p-4 h-[410px] w-[80%]">
                {/* Small Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                    SMALL APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Blenders</Link>
                    <Link to="#">Deep Fryers</Link>
                    <Link to="#">Juicers</Link>
                    <Link to="#">Rice Cookers</Link>
                    <Link to="#">Toasters & Ovens</Link>
                    <Link to="#">Microwaves</Link>
                    <Link to="#">Bundles</Link>
                    <Link to="#">Vaccum Cleaners</Link>
                    <Link to="#">Yam Pounders</Link>
                    <Link to="#">Irons</Link>
                    <Link to="#">Electric Cookware</Link>
                    <Link to="#">Electric Drink Mixers</Link>
                    <Link to="#">Food Procersors</Link>
                    <Link to="#">Coffee Makers</Link>
                    <Link to="#">Electric Ressure</Link>
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    LARGE APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Washing Machines</Link>
                    <Link to="#">Fridges</Link>
                    <Link to="#">Freezers</Link>
                    <Link to="#">Air Conditioners</Link>
                    <Link to="#">Heaters</Link>
                    <Link to="#">Fans</Link>
                    <Link to="#">Air Purifirs</Link>
                    <Link to="#">Water Dispensers</Link>
                    <Link to="#">Generators & Inveters</Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    BRANDS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Nexus</Link>
                    <Link to="#">Hisense</Link>
                    <Link to="#">Polystar</Link>
                    <Link to="#">TCL</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
        {/* Musical  Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("Musical")}
            onMouseLeave={() => handleHover(null)}
          >
            <IoIosTv className="font-bold mr-2" />
            Musical Instuments
          </Link>

          {/* Dropdown Modal for Fashion */}
          {hoveredLink === "Musical" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("Musical")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-360px] absolute bg-white gap-4 p-4 h-[410px] w-[80%] ">
                {/* Small Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                    SMALL APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Blenders</Link>
                    <Link to="#">Deep Fryers</Link>
                    <Link to="#">Juicers</Link>
                    <Link to="#">Rice Cookers</Link>
                    <Link to="#">Toasters & Ovens</Link>
                    <Link to="#">Microwaves</Link>
                    <Link to="#">Bundles</Link>
                    <Link to="#">Vaccum Cleaners</Link>
                    <Link to="#">Yam Pounders</Link>
                    <Link to="#">Irons</Link>
                    <Link to="#">Electric Cookware</Link>
                    <Link to="#">Electric Drink Mixers</Link>
                    <Link to="#">Food Procersors</Link>
                    <Link to="#">Coffee Makers</Link>
                    <Link to="#">Electric Ressure</Link>
                  </ul>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    LARGE APPLIANCES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Washing Machines</Link>
                    <Link to="#">Fridges</Link>
                    <Link to="#">Freezers</Link>
                    <Link to="#">Air Conditioners</Link>
                    <Link to="#">Heaters</Link>
                    <Link to="#">Fans</Link>
                    <Link to="#">Air Purifirs</Link>
                    <Link to="#">Water Dispensers</Link>
                    <Link to="#">Generators & Inveters</Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    BRANDS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Nexus</Link>
                    <Link to="#">Hisense</Link>
                    <Link to="#">Polystar</Link>
                    <Link to="#">TCL</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
        {/* Other Categories  Link */}
        <li className="relative">
          <Link
            to="#"
            className="flex items-center p-2 hover:text-orange-600 hover:bg-gray-100 rounded"
            onMouseEnter={() => handleHover("Other")}
            onMouseLeave={() => handleHover(null)}
          >
            <TbDotsCircleHorizontal className="font-bold mr-2" />
            Other Categories
          </Link>

          {/* Dropdown Modal for Fashion */}
          {hoveredLink === "Other" && (
            <div
              className="relative z-30 top-[0%] left-[100%] rounded-lg w-[900px] text-gray-700 bg-red-500"
              onMouseEnter={() => handleHover("Other")}
              onMouseLeave={() => handleHover(null)}
            >
              <div className=" grid grid-cols-3  top-[-396px] absolute bg-white gap-4 p-4 h-[410px] w-[80%]">
                {/* Small Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 border-b-2 border-gray-200">
                    T0YS & GAMES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Games</Link>
                    <Link to="#">Dress Up & Pretend Play</Link>

                    <Link to="#">Sports & Outdoor Play</Link>
                    <Link to="#">Top Toys & Games</Link>
                  </ul>

                  <div>
                  <h4 className="font-semibold text-lg mt-4  border-b-2 border-gray-200">
                    AUTOMOBILE
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#"> Car Care</Link>
                    <Link to="#">Car Electronics & Accessories</Link>
                    <Link to="#">Lights & Lighting Accessories</Link>
                    <Link to="#">Exterior Accessories</Link>
                    <Link to="#">Interior Accessories</Link>
                    <Link to="#">Tyre & Rims</Link>
                  </ul>
                </div>
                </div>

                {/* Large Appliances */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    SPORTING GOODS
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Cadio Training</Link>
                    <Link to="#">Strength Training Equipment</Link>
                    <Link to="#">Accessories Team Sports</Link>
                    <Link to="#">Outdoor & Adventure</Link>
                  </ul>
                  <div>
                  <h4 className="font-bold text-md mt-5 ">
                    BOOKS, MOVIES AND MUSIC
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">PET SUPPLIES</Link>
                    <Link to="#">WHOLESALE</Link>

                    <Link to="#">Sports & Outdoor Play</Link>
                    <Link to="#">JMIA GLOBAL</Link>
                  </ul>
                </div>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold text-lg mb-2  border-b-2 border-gray-200">
                    OFFICIAL STORES
                  </h4>
                  <ul className="space-y-1 flex flex-col">
                    <Link to="#">Adidas</Link>
                    <Link to="#">Nestle</Link>
                     <Link to="#">Xiaomi</Link>{" "}
                    <Link to="#">Nivea</Link>
                     <Link to="#">Apple</Link>{" "}
                    <Link to="#">Intel</Link>{" "}
                    <Link to="#">Reckitt Benckiser</Link>{" "}
                    <Link to="#">Binatone</Link>
                     <Link to="#">Nexus</Link>{" "}
                  </ul>
                </div>
                
               
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideNavBar;
