import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuCircleHelp } from "react-icons/lu";
import Account from "../pages/Account";
import HelpNav from "../pages/HelpNav";
import { Cartcontext } from "../context/CartContext";

const excludeArr = ["/signup", "/login"];

const Nav = () => {
  const { cartItems } = useContext(Cartcontext);  // cartItems comes from context
  const location = useLocation();
  const isShow = !excludeArr.includes(location.pathname);

  // Calculate distinct cart item count (i.e., number of unique items)
  const totalItemCount = cartItems.length;

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [isModalHelpOpen, setIsModalHelpOpen] = useState(false);

  // Toggle help modal visibility
  const handleHelpModalToggle = () => {
    setIsModalHelpOpen(!isModalHelpOpen);
  };

  return isShow ? (
    <nav className="p-4 flex items-center justify-between gap-4 w-full fixed top-0 z-50 transition-colors bg-white">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link to={"/HomePage"}>
          <img
            src="https://miro.medium.com/v2/resize:fit:2000/0*6VFlsgzATahzs9CC.png"
            alt="Jumia Logo"
            className="w-auto h-10"
          />
        </Link>
      </div>

      {/* Search Bar and Button Section */}
      <div className="flex gap-2 p-1 flex-grow max-w-3/4">
        <input
          type="search"
          placeholder="Search products, brands and categories"
          className="p-2 w-full rounded border"
        />
        <button className="bg-orange-500 text-white p-2 rounded">Search</button>
      </div>

      {/* Profile, Help, and Cart Section */}
      <div className="flex items-center gap-2 justify-end flex-shrink-0">
        {/* Profile Section - Account Modal */}
        <Account
          handleModalToggle={handleModalToggle}
          isModalOpen={isModalOpen}
        />

        {/* Help Link */}
        <HelpNav
          handleHelpModalToggle={handleHelpModalToggle}
          isModalHelpOpen={isModalHelpOpen}
        />

        {/* Cart Link */}
        <Link
          to="/cart"
          className="flex items-center gap-2 relative hover:text-orange-500"
        >
          <div className="text-white text-lg hover:text-blue-400 transition-all cursor-pointer">
            <AiOutlineShoppingCart
              size={25}
              color="black"
              className="hover:text-orange-500"
            />
          </div>

          {/* Show distinct cart item count */}
          {totalItemCount > 0 && (
            <span className="absolute bottom-3 left-4 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItemCount}
            </span>
          )}
          <p>Cart</p>
        </Link>
      </div>
    </nav>
  ) : null;
};

export default Nav;
