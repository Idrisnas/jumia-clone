import { LiaUserCheckSolid } from "react-icons/lia";
import { LuPackage2 } from "react-icons/lu";
import { FaInbox, FaRegHeart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { Cartcontext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const Account = ({ handleModalToggle, isModalOpen }) => {
  const [user, setUser] = useState(null);
  const { handleLogout } = useContext(Cartcontext);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("user");
      }
    } else {
      console.log("No user found in localStorage");
    }
  }, []);

  const handleUserLogout = () => {
    handleLogout(); // Use handleLogout from CartProvider
    setUser(null); // Reset user state
  };

  return (
    <div>
      <Link
        to="#"
        className={`flex items-center gap-2 p-2 hover:text-orange-500 ${isModalOpen ? "bg-gray-300" : ""}`}
        onClick={handleModalToggle}
      >
        <LiaUserCheckSolid className="hover:text-orange-500" />
        <p>Hi, {user ? user.first_name : "Account"}</p>
        {isModalOpen ? (
          <MdKeyboardArrowUp className="text-xl" />
        ) : (
          <MdKeyboardArrowDown className="text-xl" />
        )}
      </Link>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50" onClick={handleModalToggle}>
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[13%] absolute top-16 right-40"
            onClick={(e) => e.stopPropagation()}
          >
            {!user ? (
              <Link to="/profile">
                <button
                  className="bg-orange-500 p-2 rounded text-white items-center w-full mb-4"
                  onClick={handleModalToggle}
                >
                  SIGN UP
                </button>
              </Link>
            ) : null}

            <Link to={user ? "/my-account" : "/profile"} className="flex items-center gap-2 hover:bg-gray-100 p-2" onClick={handleModalToggle}>
              <LiaUserCheckSolid />
              <p>My Account</p>
            </Link>
            <Link to={user ? "/orders" : "/profile"} className="flex items-center gap-2 hover:bg-gray-100 p-2" onClick={handleModalToggle}>
              <LuPackage2 />
              <p>Orders</p>
            </Link>
            <Link to={user ? "/saved-items" : "/profile"} className="flex items-center gap-2 hover:bg-gray-100 p-2" onClick={handleModalToggle}>
              <FaRegHeart />
              <p>Saved Items</p>
            </Link>

            {/* Only show the below links when the user is logged in */}
            {user && (
              <>
                <Link to="/inbox" className="flex items-center gap-2 hover:bg-gray-100 p-2" onClick={handleModalToggle}>
                  <FaInbox />
                  <p>Inbox</p>
                </Link>
                <Link to="/voucher" className="flex items-center gap-2 hover:bg-gray-100 p-2" onClick={handleModalToggle}>
                  <FaTicket />
                  <p>Voucher</p>
                </Link>
              </>
            )}

            {user ? (
              <div className="text-center items-center border-t-2 border-gray-200">
                <Link
                  to="#"
                  onClick={handleUserLogout}
                  className="P-4 text-orange-500 hover:bg-gray-300 text-sm mt-3"
                >
                  LOGOUT
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
