import React from "react";
import { LiaGooglePlay } from "react-icons/lia";
import { FaApple } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaCcMastercard,
  FaCcPaypal,
  FaDhl,
} from "react-icons/fa";
import { TbBrandVisa } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { RiHandCoinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const excludeArr = ["/signup", "/login"];

const Footer = () => {
  const location = useLocation();
  const isShow = !excludeArr.includes(location.pathname);

  return isShow ? (
    <footer className="bg-gray-900  text-white py-8 px-4">
      {/* Main Content Area */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-700 p-4">
        {/* Logo Section */}
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:2000/0*6VFlsgzATahzs9CC.png"
            alt="Jumia logo"
            className="w-[85%] md:w-1/5 mb-4"
          />
        </div>

        {/* Newsletter and Gender Buttons */}
        <div className="flex flex-col items-center md:items-start leading-6">
          <p className="text-center md:text-left">New to Jumia?</p>
          <p className="text-center md:text-left mb-4">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <div className="w-full flex gap-2 items-center flex-col md:flex-row">
            {/* Email Input */}
            <div className="flex items-center relative w-full md:w-3/4 mb-4">
              <MdEmail color="gray" className="absolute left-2" />
              <input
                type="text"
                className="w-full pl-10 p-2 bg-white text-black border-2 border-white rounded focus:outline-none focus:border-orange-500 "
                placeholder="Enter Email Address"
              />
            </div>

            {/* Gender Buttons */}
            <div className="flex gap-2 justify-center md:justify-start">
              <button className="px-4 py-2 bg-transparent text-white border-2 border-white rounded hover:border-orange-500 hover:text-orange-500 focus:outline-none">
                MALE
              </button>
              <button className="px-4 py-2 bg-transparent text-white border-2 border-white rounded hover:border-orange-500 hover:text-orange-500 focus:outline-none">
                FEMALE
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex gap-2 items-center mt-4">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="bg-transparent mb-5"
            />
            <div>
              <p>
                I agree to Jumia’s Privacy and Cookie Policy. You can
                unsubscribe from newsletters at any time.
              </p>
              <Link to="#" className="text-orange-500 hover:underline">
                I accept the Legal Terms
              </Link>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-rtt2apNU_7IT-n0bTRbi4hcr6a8WFRGAw&s"
              alt="Download Jumia App"
              className="w-16 h-14 mr-4"
            />
            <div>
              <h1 className="text-lg font-semibold mb-4">
                DOWNLOAD JUMIA FREE APP
              </h1>
              <p className="text-sm">Get access to exclusive offers!</p>
            </div>
          </div>

          {/* App Store and Google Play Buttons */}
          <div className="flex gap-4 mt-3 justify-center md:justify-start">
            <div className="flex items-center gap-1">
              <FaApple
                size={50}
                color="white"
                className="text-white text-3xl mb-2"
              />
              <div>
                <h1 className="text-xs font-semibold">
                  DOWNLOAD JUMIA FREE APP
                </h1>
                <p className="text-2xl font-bold">App Store</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <LiaGooglePlay
                size={50}
                color="white"
                className="text-white text-3xl mb-2"
              />
              <div>
                <h1 className="text-xs font-semibold">GET IT ON</h1>
                <p className="text-2xl font-bold">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-400">
        {/* Placeholder for additional content */}
      </div>

      {/* Help, Useful Links, and More */}
      <div className="bg-gray-800 text-white p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h4 className="font-bold mb-4">NEED HELP?</h4>
            <div className="space-y-2 flex flex-col">
              <Link className="hover:underline">Chat with us</Link>
              <Link className="hover:underline">Help Center</Link>
              <Link className="hover:underline">Contact Us</Link>
            </div>

            <h4 className="font-bold mb-4">USEFUL LINKS</h4>
            <div className="space-y-2 flex flex-col">
              <Link className="hover:underline">Service Center</Link>
              <Link className="hover:underline">How to shop on Jumia?</Link>
              <Link className="hover:underline">
                Delivery options and timelines
              </Link>
              <Link className="hover:underline">
                How to return a product on Jumia?
              </Link>
              <Link className="hover:underline">
                Corporate and bulk purchases
              </Link>
              <Link className="hover:underline">Report a Product</Link>
              <Link className="hover:underline">Dispute Resolution Policy</Link>
              <Link className="hover:underline">Returns & Refund Timeline</Link>
              <Link className="hover:underline">Return Policy</Link>
              <Link className="hover:underline">Black Friday</Link>
            </div>
          </div>

          {/* About Jumia */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-4">ABOUT JUMIA</h4>
            <div className="space-y-2 flex flex-col">
              <Link to="#" className="hover:underline">
                About us
              </Link>
              <Link to="#" className="hover:underline">
                Jumia careers
              </Link>
              <Link to="#" className="hover:underline">
                Jumia Express
              </Link>
              <Link to="#" className="hover:underline">
                Terms and Conditions
              </Link>
              <Link to="#" className="hover:underline">
                Privacy Notice
              </Link>
              <Link to="#" className="hover:underline">
                Cookie Notice
              </Link>
              <Link to="#" className="hover:underline">
                Jumia Store Credit Terms & Conditions
              </Link>
              <Link to="#" className="hover:underline">
                Jumia Payment Information Guidelines
              </Link>
              <Link to="#" className="hover:underline">
                Jumia Global
              </Link>
              <Link to="#" className="hover:underline">
                Official Stores
              </Link>
              <Link to="#" className="hover:underline">
                Flash Sales
              </Link>
            </div>
          </div>

          {/* Make Money with Jumia */}
          <div>
            <h4 className="font-bold mb-4">MAKE MONEY WITH JUMIA</h4>
            <div className="space-y-2 flex flex-col">
              <Link to="#" className="hover:underline">
                Sell on Jumia
              </Link>
              <Link to="#" className="hover:underline">
                Vendor hub
              </Link>
              <Link to="#" className="hover:underline">
                Become a Sales Consultant
              </Link>
              <Link to="#" className="hover:underline">
                Join the Jumia KOL Program
              </Link>
              <Link to={"/admin"} className="bg-orange-600 p-2">
                Admin
              </Link>
              <Link to={"/display-categories"}>View product</Link>
            </div>
          </div>

          {/* Jumia International */}
          <div>
            <h4 className="font-bold mb-4">JUMIA INTERNATIONAL</h4>
            <div className="flex gap-6 ">
              <div className="space-y-2 flex flex-col">
                <Link to="#" className="hover:underline">
                  Algeria
                </Link>
                <Link to="#" className="hover:underline">
                  Egypt
                </Link>
                <Link to="#" className="hover:underline">
                  Ghana
                </Link>
                <Link to="#" className="hover:underline">
                  Ivory Coast
                </Link>
              </div>
              <div className="space-y-2 flex flex-col">
                <Link to="#" className="hover:underline">
                  Kenya
                </Link>
                <Link to="#" className="hover:underline">
                  Morocco
                </Link>
                <Link to="#" className="hover:underline">
                  Senegal
                </Link>
                <Link to="#" className="hover:underline">
                  Uganda
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us & Payment Section */}
        <div className="mt-1 pt-6 grid grid-cols-3 text-lg text-white font-bold">
          <p>JOIN US ON</p>
          <p>PAYMENT METHODS & DELIVERY PARTNERS</p>
        </div>

        <div className="mt-10 pt-6 grid grid-cols-3 text-lg text-white font-bold">
          <div className="flex items-center gap-3 space-x-4">
            <Link>
              <FaFacebookF className="hover:text-orange-500" />
            </Link>
            <Link>
              <FaYoutube className="hover:text-orange-500" />
            </Link>
            <Link>
              <FaInstagram className="hover:text-orange-500" />
            </Link>
            <Link>
              <FaXTwitter className="hover:text-orange-500" />
            </Link>
            <Link>
              <FaTiktok className="hover:text-orange-500" />
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <Link>
              <RiHandCoinFill className="hover:text-orange-500" />
            </Link>
            <Link>
              <FaCcMastercard className="hover:text-orange-500" />
            </Link>
            <Link>
              <TbBrandVisa size={35} className="hover:text-orange-500" />
            </Link>
            <Link>
              <FaCcPaypal className="hover:text-orange-500" />
            </Link>
            <FaDhl size={35} className="hover:text-orange-500" />
          </div>
        </div>
      </div>
    </footer>
  ) : null;
};

export default Footer;
