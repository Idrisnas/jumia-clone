import React, { useContext, useState } from "react";
import { Cartcontext } from "../context/CartContext";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiInboxArchiveFill, RiSecurePaymentLine, RiTruckFill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaBox, FaHandHolding } from "react-icons/fa";

const CheckOut = () => {
  const { cartItems, totalAmount } = useContext(Cartcontext);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    deliveryAddress: "",
    paymentMethod: "",
  });

  const [step, setStep] = useState(1); // Track the current step (1: Address, 2: Delivery, 3: Payment)
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");
  const [isOrderComplete, setIsOrderComplete] = useState(false); // Track order completion

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressSave = (e) => {
    e.preventDefault();
    setStep(2); // Move to Step 2: Delivery
  };

  const handleDeliveryDetails = (e) => {
    e.preventDefault();
    setStep(3); // Move to Step 3: Payment
  };

  const handleDeliveryOptionChange = (e) => {
    setSelectedDeliveryOption(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      paymentMethod: e.target.value,
    }));
  };

  const handlePaymentComplete = (e) => {
    e.preventDefault();
    setStep(4); // Mark all steps as completed
    setIsOrderComplete(true); // Enable the Place Order button
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      {/* Header */}
      <div className="flex items-center bg-white py-4 px-8 justify-between fixed w-full top-0 z-10 shadow-md">
        <Link to={"/HomePage"}>
          <img
            src="https://miro.medium.com/v2/resize:fit:2000/0*6VFlsgzATahzs9CC.png"
            alt="Jumia Logo"
            className="w-[50%] h-14"
          />
        </Link>

        {/* Page Title */}
        <div>
          <p className="text-gray-500 text-2xl font-semibold">
            Select delivery method
          </p>
        </div>

        {/* Helper Icons */}
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <MdOutlinePermPhoneMsg className="text-2xl text-gray-600" />
            <div className="text-xs">
              <p>Need Help?</p>
              <Link className="text-blue-500 font-semibold hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <GiReturnArrow className="text-2xl text-gray-600" />
            <div className="text-xs">
              <p>Eazy</p>
              <p>Return</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RiSecurePaymentLine className="text-2xl text-gray-600" />
            <div className="text-xs">
              <p>Secure</p>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto flex gap-8 px-6 sm:px-8">
          {/* Main Section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[70%] p-6">
            {/* Step 1: Customer Address */}
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IoIosCheckmarkCircle
                    className={`text-2xl ${
                      step > 1 || isOrderComplete
                        ? "text-green-500"
                        : "text-gray-400"
                    }`}
                  />
                  <p className="text-gray-700 ml-2">1. Customer Address</p>
                </div>
                {step > 1 && !isOrderComplete && (
                  <p
                    className="text-blue-300 hover:underline text-sm cursor-pointer"
                    onClick={() => setStep(1)}
                  >
                    Change
                  </p>
                )}
              </div>
              {step === 1 && (
                <form onSubmit={handleAddressSave} className="space-y-4 mt-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={userData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={userData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  <textarea
                    name="deliveryAddress"
                    placeholder="Delivery Address"
                    value={userData.deliveryAddress}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Step 2: Delivery Details */}
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IoIosCheckmarkCircle
                    className={`text-2xl ${
                      step > 2 || isOrderComplete
                        ? "text-green-500"
                        : "text-gray-400"
                    }`}
                  />
                  <p className="text-gray-700 ml-2">2. Delivery Details</p>
                </div>
                {step > 2 && !isOrderComplete && (
                  <p
                    className="text-blue-300 hover:underline text-sm cursor-pointer"
                    onClick={() => setStep(1)}
                  >
                    Change
                  </p>
                )}
              </div>
              {step === 2 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <IoIosCheckmarkCircle
                        className={`text-2xl ${
                          step > 2 || isOrderComplete
                            ? "text-green-500"
                            : "text-gray-400"
                        }`}
                      />
                      <p className="text-gray-700 ml-2">2. Delivery Details</p>
                    </div>
                  </div>
                  <form
                    onSubmit={handleDeliveryDetails}
                    className="mt-4 space-y-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="deliveryOption"
                          value="Pick-up Station Delivery between 7 January and 11 January"
                          onChange={handleDeliveryOptionChange}
                          required
                          className="h-5 w-5"
                        />

                        <div>
                          <p className="text-lg"> Pick-up Station (₦8,310)</p>
                          <p>Delivery between 7 January and 11 January.</p>
                        </div>
                      </div>
                      <div className="relative flex flex-col items-center leading-4 orange p-4">
                        <FaHandHolding className="text-xl text-orange-400" />
                        <RiInboxArchiveFill className="absolute text-xs text-orange-300 top-4 left-6" />
                      </div>
                    </div>
                    <div className="border-2 border-gray-200">
                      <div className="flex justify-between items-center p-4">
                        <p> Pickup Station</p>
                        <div>
                          <Link className="text-blue-400 hover:underline">
                            Select pickup station
                          </Link>
                        </div>
                      </div>{" "}
                      <div className="border-b border-gray-200"></div>
                      <div className="flex items-center gap-1 p-4">
                        <div className="bg-gray-300 rounded-full">
                          <img
                            src="https://www.jumia.com.ng/assets_he/images/map.a431d0e6.svg"
                            alt=""
                            className="h-12 w-13"
                          />
                        </div>

                        <div className="leading-4">
                          <p className="text-lg"> No Pickup Station Selected</p>
                          <p className="text-gray-400">
                            To use this option, you will need to add a pickup
                            station near your location.
                          </p>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="deliveryOption"
                        value="Door Delivery Delivery between 17 January and 21 January"
                        onChange={handleDeliveryOptionChange}
                        required
                        className="h-5 w-5"
                      />
                      <div>
                        <p className="text-lg">Door Delivery (₦18,310)</p>
                        <p>Delivery between 17 January and 21 January.</p>
                      </div>
                    </div>
                    <div>
                    <RiTruckFill className=" text-2xl text-orange-300 " /> 
                    </div>
                    </div>

                    <div className="space-y-4 border-2 border-gray-200 p-4">
                      <p className="text-lg">
                        Delivery Option:{" "}
                        <span className="font-semibold ">
                          {selectedDeliveryOption || "Not Selected"}
                        </span>
                      </p>
                      {cartItems.map((item) => (
                        <div key={item.id} className="p-4 border-b">
                          <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                              <img
                                src={item.images[0]}
                                alt={item.title}
                                className="w-24 h-12 object-cover rounded-md"
                              />
                              <div>
                                <h2 className="text-sm font-semibold">
                                  {item.descp}
                                </h2>
                                <p className="text-gray-500">
                                  QTY: {item.quantity}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end mt-4">
                      <button
                        type="submit"
                        className="p-2 bg-orange-400 rounded-md hover:bg-orange-500 text-white"
                      >
                        Confirm Delivery Details
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Step 3: Payment Options */}
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IoIosCheckmarkCircle
                    className={`text-2xl ${
                      step > 3 || isOrderComplete
                        ? "text-green-500"
                        : "text-gray-400"
                    }`}
                  />
                  <p className="text-gray-700 ml-2">3. Payment Method</p>
                </div>
                {step > 3 && !isOrderComplete && (
                  <p
                    className="text-blue-300 hover:underline text-sm cursor-pointer"
                    onClick={() => setStep(1)}
                  >
                    Change
                  </p>
                )}
              </div>
              {step === 3 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <IoIosCheckmarkCircle
                        className={`text-2xl ${
                          isOrderComplete ? "text-green-500" : "text-gray-400"
                        }`}
                      />
                      <p className="text-gray-700 ml-2">3. Payment Options</p>
                    </div>
                  </div>
                  <form
                    onSubmit={handlePaymentComplete}
                    className="mt-4 space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Card"
                        onChange={handlePaymentMethodChange}
                        required
                        className="h-5 w-5"
                      />
                      <label className="text-lg">Pay with Card</label>
                    </div>
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Pay on Delivery"
                        onChange={handlePaymentMethodChange}
                        required
                        className="h-5 w-5"
                      />
                      <label className="text-lg">Pay on Delivery</label>
                    </div>
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Bank Transfer"
                        onChange={handlePaymentMethodChange}
                        required
                        className="h-5 w-5"
                      />
                      <label className="text-lg">Pay via Bank Transfer</label>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="p-2 bg-orange-400 rounded-md hover:bg-orange-500"
                      >
                        Complete Payment
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-[30%]">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
              <h2 className="text-xl font-bold mb-4">Cart Summary</h2>

              <p className="text-lg font-semibold mt-2">
                Total: NGN {(totalAmount || 0).toFixed(2)}
              </p>
              <button
                onClick={handlePlaceOrder}
                disabled={!isOrderComplete}
                className={`mt-6 w-full py-2 text-white font-semibold rounded-md ${
                  isOrderComplete
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Place Order
              </button>
              <p className="text-center text-gray-400 mt-1">
                (Complete the steps in order to proceed)
              </p>
            </div>

            <div className="text-center mt-5  text-xs">
              <p className="text-gray-400">
                By proceeding, you are automatically accepting the{" "}
              </p>
              <Link className="text-blue-500 font-semibold mt-1 hover:underline">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
