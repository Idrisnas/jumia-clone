// Account.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LiaUserCheckSolid } from "react-icons/lia";
import { LuCircleHelp, LuMessageSquareMore, LuPackage2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";




const HelpNav = ({ handleHelpModalToggle, isModalHelpOpen }) => {
  return (
    <div>
      {/* Account Link */}
      <Link
        to="#"
        className={`flex items-center gap-2 p-2 hover:text-orange-500 ${isModalHelpOpen ? "bg-gray-300" : ""}
            `}
        onClick={handleHelpModalToggle}
      >


        <LuCircleHelp className="hover:text-orange-500" />
        <p>Help</p>
        {/* Toggle Arrow */}
        {isModalHelpOpen ? (
          <MdKeyboardArrowUp className="text-xl" />
        ) : (
          <MdKeyboardArrowDown className="text-xl" />
        )}
      </Link>

      {/* Modal */}
      {isModalHelpOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={handleHelpModalToggle}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[14%] absolute top-16 right-10"
            onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing
          >
            
            <Link
              to="/profile"
              className="flex items-center gap-2 hover:bg-gray-100 p-2"
              onClick={handleHelpModalToggle}
            >
              <p>Help Center</p>
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-2 hover:bg-gray-100 p-2"
              onClick={handleHelpModalToggle}
            >
              <p>Place an order</p>
            </Link> <Link
              to="/profile"
              className="flex items-center gap-2 hover:bg-gray-100 p-2"
              onClick={handleHelpModalToggle}
            >
              <p>Payment Options</p>
            </Link> <Link
              to="/profile"
              className="flex items-center gap-2 hover:bg-gray-100 p-2"
              onClick={handleHelpModalToggle}
            >
              <p>Track an Order</p>
            </Link> <Link
              to="/profile"
              className="flex items-center gap-2 hover:bg-gray-100 p-2"
              onClick={handleHelpModalToggle}
            >
              <p>Cancel an Order </p>
            </Link> <Link
              to="/profile"
              className="flex items-center gap-2 hover:bg-gray-100 p-2"
              onClick={handleHelpModalToggle}
            >
              <p>Returns & Refunds</p>
            </Link>
           
            <Link
              to="/profile"
              className="flex items-center justify-center gap-2 text-white bg-orange-500 hover:bg-orange-700 p-2"
              onClick={handleHelpModalToggle}
            >
              <LuMessageSquareMore />
              <p>LIVE CHAT</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpNav;



