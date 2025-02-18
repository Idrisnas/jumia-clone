import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Cartcontext } from "../context/CartContext";
import { GiDeliveryDrone, GiReturnArrow } from "react-icons/gi";
import { CiDeliveryTruck, CiFacebook, CiStar } from "react-icons/ci";
import { IoIosArrowForward, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiInformation2Line, RiInformationLine } from "react-icons/ri";
import { MdAddShoppingCart, MdStar } from "react-icons/md";
import { FaFacebook, FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { BsTwitterX } from "react-icons/bs";
import SponsordProducts from "../pages/SponsordProducts";
import ProductInteractions from "./ProductInteractions/ProductInteractions";

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const Productpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [mainImage, setMainImage] = useState("");
  const { addToCart } = useContext(Cartcontext);



  // Discount Calculation function
  const calculateDiscountedPrice = (product) => {
    const originalPrice = product.price ? parseFloat(product.price.replace(/,/g, "")) : 0;
    const discount = product.has_discount ? 0.2 : 0; // Assuming a 20% discount
    return discount > 0 ? originalPrice * (1 - discount) : originalPrice;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    prevArrow: (
      <button
        className="slick-prev custom-prev-arrow"
        aria-label="Previous Slide"
      >
        <IoIosArrowForward color="white" size={24} />
      </button>
    ),
    nextArrow: (
      <button className="slick-next custom-next-arrow" aria-label="Next Slide">
        <IoIosArrowForward color="white" size={24} />
      </button>
    ),
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${Base_url}/products/${id}`);
        // console.log(response.data);
        setProduct(response.data);
        setMainImage(response.data.images?.[0] || "");
        setLoading(false);
      } catch (error) {
        setErrorMessage("Failed to load product details.");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  const handleImageClick = (imageUrl) => {
    console.log("Image clicked:", imageUrl);
    setMainImage(imageUrl);
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }


  const handleAddToCart = () => {
    const discountedPrice = calculateDiscountedPrice(product); // Get the discounted price
    if (isNaN(discountedPrice) || discountedPrice <= 0) {
      console.error("Calculated discounted price is invalid:", discountedPrice);
      return;
    }

    // Add the product to the cart with the discounted price
    addToCart({
      ...product,
      price: discountedPrice,  // Pass the discounted price
      quantity: 1,  // Default quantity
    });
  };

  // Loading and error handling
  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const discountedPrice = calculateDiscountedPrice(product);
  const originalPrice = product.price ? parseFloat(product.price.replace(/,/g, "")) : 0;
  const discount = product.has_discount ? 0.2 : 0;
  return (
    <>
      <div className="bg-gray-100 py-12 mt-11">
        <div className=" mx-auto  sm:px-8 flex gap-2">
          <div className="flex gap-2 justify-between flex-col lg:flex-row bg-white w-[75%] shadow-lg rounded-lg overflow-hidden">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3">
                <Link to={"/"}>Home</Link>
                <Link to={""}>{product.brand}</Link>

                <h1 className="text-m font-bold text-gray-400">
                  {product.title}
                </h1>
              </div>

              <img
                src={mainImage || "https://via.placeholder.com/500"}
                alt={product.title}
                className="w-full h-96 object-cover mb-4 rounded-lg"
              />

              {product.images?.length > 1 && (
                <Slider
                  className="mt-6 pt-3 flex justify-center  px-2 border-b border-gray-100"
                  {...settings}
                >
                  {product.images?.map((image, index) => (
                    <div
                      key={index}
                      className="cursor-pointer 
                    
                        outline: none;border: none;
                    "
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={image}
                        alt={product.title}
                        className="w-14 h-14 object-cover mb-4 rounded-t-lg lg:rounded-l-lg hover:bg-orange-400 outline-none border-blue-500-"
                      />
                    </div>
                  ))}
                </Slider>
              )}
              <div className="p-2">
                <p>SHARE THIS PRODUCT</p>
                <div className="flex gap-2 items-center">
                  <CiFacebook className="text-2xl hover:text-orange-400 cursor-pointer" />
                  <BsTwitterX className=" text-2xl text-black border-2 p-1  rounded-full hover:text-orange-400 hover:border-orange-400 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="lg:w-1/2 px-2 py-2 ">
              <div className="flex  justify-between ">
                <h1 className="text-sm font-bold text-gray-600 mb-3">
                  {product.descp}
                </h1>
                <FaRegHeart className="text-orange-500 w-36 h-23  " />
              </div>
              <div className="flex  w-full gap-1 border-b border-gray-200 pb-5">
                <p>
                  Brand:{" "}
                  <Link className="text-gray-500 hover:underline">
                    {product.brand}
                  </Link>{" "}
                </p>
                <strong>|</strong>
                <Link className="text-gray-500 hover:underline">
                  Similar producust from {product.brand}
                </Link>
              </div>

              <div className="mb-4">
                {/* Show Discounted Price if Available */}
                {discount > 0 ? (
                  <>
                    <div className="flex gap-2 items-center">
                      <span className="text-lg font-semibold text-black">
                        {product.currency}: {discountedPrice.toFixed(2)}
                      </span>
                      <span className="text-sm  line-through text-gray-500 mr-2">
                        {product.currency}: {originalPrice.toFixed(2)}
                      </span>

                      <p className="text-sm text-orange-300 ml-2">
                        - {discount}%
                      </p>
                    </div>
                  </>
                ) : (
                  <span className="text-3xl font-semibold text-gray-900">
                    {product.currency}: {originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p>In stock</p>
              <div>
                <p>{product.quantity} items left</p>
                <div className="bg-gray-500 h-2 rounded">
                  {/* Set the width dynamically based on the product quantity */}
                  <div
                    className="bg-orange-400 h-2 rounded"
                    style={{ width: `${(product.quantity / 400) * 100}%` }}
                  ></div>
                </div>
              </div>
              <p>+ shipping from ₦ 600 to Ikoyi (Obalende)</p>
              <div className="border-b border-gray-200 pb-4">
                <button
                  className="mt-6 px-6 py-3 w-full bg-orange-400 text-white text-lg font-semibold rounded-lg hover:bg-orange-500 transition-all flex items-center justify-between gap-2 "
                  onClick={handleAddToCart}
                >
                  <MdAddShoppingCart className="text-white" /> {/* Cart icon */}
                  Add to Cart
                </button>
              </div>

              <h1 className="my-4">PROMOTIONS</h1>
              <div className="flex gap-2 items-center mb-3">
                <MdStar className="text-white bg-orange-400  w-4 rounded-full" />{" "}
                <Link className="text-blue-400 hover:underline">
                  Call 07006000000 To Place Your Order
                </Link>
              </div>
              <div className="flex gap-2  mb-3 ">
                <MdStar className="text-white bg-orange-400  w-6 rounded-full mt-1" />{" "}
                <Link className="text-blue-400 hover:underline">
                  Need extra money? Loan up to N500,000 on the JumiaPay Android
                  app.
                </Link>
              </div>
              <div className="flex gap-2 ">
                <MdStar className="text-white bg-orange-400  w-6 rounded-full mt-1" />{" "}
                <Link className="text-blue-400 hover:underline">
                  Enjoy cheaper shipping fees when you select a PickUp Station
                  at checkout.
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[25%] px-2 bg-white">
            <div className=" ">
              <h1 className="text-xl font-semibold text-gray-900 border-b border-gray-100">
                Delivery & Returns
              </h1>
              <div className="mt-4   border-b border-gray-100">
                <p className="text-gray-700">
                  Free delivery on thousands of products in Lagos, Ibadan &
                  Abuja{" "}
                  <Link to="#" className="text-blue-500">
                    Details
                  </Link>
                </p>
              </div>

              {/* Choose Shipping Location */}
              <div className="mt-6">
                <h1 className="text-xl font-semibold text-gray-900">
                  Choose Your Location
                </h1>
                <select
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  className="mt-2 p-3 border rounded-md w-full"
                >
                  <option value="">Select a location</option>
                  {product.shipping_locations?.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <GiDeliveryDrone className="border border-gray-100 p-3 w-16 h-16" />
                    <div>
                      {" "}
                      <p>Pickup Station</p>
                      <p>
                        Delivery Fees <strong>₦ 500</strong>
                      </p>
                    </div>
                  </div>
                  <Link to="#" className="text-blue-500">
                    Details
                  </Link>
                </div>

                <p className="text-left text-sm pl-14">
                  Ready for pickup between <strong>24 December</strong> and{" "}
                  <strong>28 December</strong> if you place your order within
                  the next <strong>17hrs 18mins</strong>
                </p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <CiDeliveryTruck className="border border-gray-100 p-3 w-16 h-16" />
                    <div>
                      {" "}
                      <p>Door Delivery</p>
                      <p>
                        Delivery Fees <strong>₦ 900</strong>
                      </p>
                    </div>
                  </div>
                  <Link to="#" className="text-blue-500">
                    Details
                  </Link>
                </div>

                <p className="text-left text-sm pl-14">
                  Ready for delivery between <strong>24 December</strong> and{" "}
                  <strong>28 December</strong> if you place your order within
                  the next <strong>17hrs 18mins</strong>
                </p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <GiReturnArrow className="border border-gray-100 p-3 w-16 h-16" />
                    <div className="mt-4">
                      {" "}
                      <p>Return Policy</p>
                      <p>
                        Free return within 7 days for ALL eligible items{" "}
                        <Link to="#" className="text-blue-500">
                          Details
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-2 py-2 bg-gray-50">
              <Link className="flex justify-between items-center border-b border-gray-300 pb-2">
                SELLER INFORMATION <IoIosArrowForward />
              </Link>
              <div className="border-b border-gray-300 py-4">
                <h1>DANA TECHNOLOGY</h1>
                <div className="flex justify-between items-center">
                  <div className="leading-4 text-sm">
                    <p>
                      <strong>88% </strong>Seller Score
                    </p>
                    <p>
                      <strong>9436</strong> Followers
                    </p>
                  </div>
                  <Link className="bg-orange-400 p-2 rounded text-white">
                    Follow
                  </Link>
                </div>
              </div>
              <div>
                <div>
                  <p className="flex items-center gap-2 mt-4">
                    Seller Performance{" "}
                    <RiInformation2Line className="hover:text-orange-500 w-6 h-6" />
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdStar className="text-white bg-green-400  w-4 rounded-full" />{" "}
                  <p>
                    Shipping speed: <strong>Excellent</strong>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdStar className="text-white bg-green-400  w-4 rounded-full" />{" "}
                  <p>
                    Quality Score: <strong>Excellent</strong>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdStar className="text-white bg-green-400  w-4 rounded-full" />{" "}
                  <p>
                    Customer Rating: <strong>Average</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 mt-11">
        <div className=" mx-auto  sm:px-8 flex gap-2">
          <div className="bg-white w-[75%] ">
            <div className="flex items-center justify-between p-4">
              <p className="text-2xl font-semibold">
                Verified Customer Feedback
              </p>{" "}
              <Link className="text-orange-400">See all</Link>
            </div>
            <div className="flex gap-2  flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden">
              <div className="w-[40%]  p-2">
                {/* <ProductInteractions productId={id} /> */}

                <p className="text-center text-sm mb-2">
                  {" "}
                  VERIFIED RATINGS(26465)
                </p>
                <div className="bg-gray-100 flex flex-col justify-center items-center mx-6 p-4 leading-6">
                  <p className="text-yellow-500 font-bold text-lg">
                    3.7 <span className="font-semibold">/5</span>
                  </p>
                  <div className="flex items-center gap-1 py-2">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-gray-400" />
                    <FaStar className="text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">
                    26465 verified ratings
                  </p>
                </div>

                <div className=" mx-6 my-3">
                  <div className="flex gap-3  items-center">
                    <p className="font-bold">5</p>
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-400">(10872)</span>
                    <div className="bg-gray-300 h-2 w-24 rounded">
                      <div className="bg-yellow-400 h-2 w-20 rounded"></div>
                    </div>
                  </div>
                  <div className="flex gap-3  items-center">
                    <p className="font-bold">4</p>
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-400">(5984)</span>
                    <div className="bg-gray-300 h-2 w-24 rounded">
                      <div className="bg-yellow-400 h-2 w-16 rounded"></div>
                    </div>
                  </div>

                  <div className="flex gap-3  items-center">
                    <p className="font-bold">3</p>
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-400">(3677)</span>
                    <div className="bg-gray-300 h-2 w-24 rounded">
                      <div className="bg-yellow-400 h-2 w-9 rounded"></div>
                    </div>
                  </div>

                  <div className="flex gap-3  items-center">
                    <p className="font-bold">2</p>
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-400">(2639)</span>
                    <div className="bg-gray-300 h-2 w-24 rounded">
                      <div className="bg-yellow-400 h-2 w-5 rounded"></div>
                    </div>
                  </div>

                  <div className="flex gap-3  items-center">
                    <p className="font-bold">1</p>
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-400">(3293)</span>
                    <div className="bg-gray-300 h-2 w-24 rounded">
                      <div className="bg-yellow-400 h-2 w-3 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[60%] p-2">
                <div>
                  <div className="border-b border-gray-200 py-2">
                    <p>COMMENTS FROM VERIFIED PURCHASE(5480)</p>
                  </div>

                  <div className="flex items-center gap-1 py-2">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p>Nice Nice</p>
                  <p>it is good</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <p>12-01-2025</p>
                      <p>by Oluwafemi</p>
                    </div>
                    <div className="flex  gap-1 items-center text-green-400">
                      <IoMdCheckmarkCircleOutline />

                      <p>Verified Purchase</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="border-b border-gray-200 py-2">
                  </div>

                  <div className="flex items-center gap-1 py-2">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p>Nice Nice</p>
                  <p>it is good</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <p>12-01-2025</p>
                      <p>by Oluwafemi</p>
                    </div>
                    <div className="flex  gap-1 items-center text-green-400">
                      <IoMdCheckmarkCircleOutline />

                      <p>Verified Purchase</p>
                    </div>
                  </div>
                </div> <div>
                  <div className="border-b border-gray-200 py-2">
                  </div>

                  <div className="flex items-center gap-1 py-2">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p>Nice Nice</p>
                  <p>it is good</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <p>12-01-2025</p>
                      <p>by Oluwafemi</p>
                    </div>
                    <div className="flex  gap-1 items-center text-green-400">
                      <IoMdCheckmarkCircleOutline />

                      <p>Verified Purchase</p>
                    </div>
                  </div>
                </div>


                <ProductInteractions productId={id} />
              </div>
            </div>
          </div>

          <div className="w-[25%] px-2 bg-white">
            <div className=" ">
              <h1 className="text-xl font-semibold text-gray-900 border-b border-gray-100">
                Delivery & Returns
              </h1>
              <div className="mt-4   border-b border-gray-100">
                <p className="text-gray-700">
                  Free delivery on thousands of products in Lagos, Ibadan &
                  Abuja{" "}
                  <Link to="#" className="text-blue-500">
                    Details
                  </Link>
                </p>
              </div>

              {/* Choose Shipping Location */}
              <div className="mt-6">
                <h1 className="text-xl font-semibold text-gray-900">
                  Choose Your Location
                </h1>
                <select
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  className="mt-2 p-3 border rounded-md w-full"
                >
                  <option value="">Select a location</option>
                  {product.shipping_locations?.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <GiDeliveryDrone className="border border-gray-100 p-3 w-16 h-16" />
                    <div>
                      {" "}
                      <p>Pickup Station</p>
                      <p>
                        Delivery Fees <strong>₦ 500</strong>
                      </p>
                    </div>
                  </div>
                  <Link to="#" className="text-blue-500">
                    Details
                  </Link>
                </div>

                <p className="text-left text-sm pl-14">
                  Ready for pickup between <strong>24 December</strong> and{" "}
                  <strong>28 December</strong> if you place your order within
                  the next <strong>17hrs 18mins</strong>
                </p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <CiDeliveryTruck className="border border-gray-100 p-3 w-16 h-16" />
                    <div>
                      {" "}
                      <p>Door Delivery</p>
                      <p>
                        Delivery Fees <strong>₦ 900</strong>
                      </p>
                    </div>
                  </div>
                  <Link to="#" className="text-blue-500">
                    Details
                  </Link>
                </div>

                <p className="text-left text-sm pl-14">
                  Ready for delivery between <strong>24 December</strong> and{" "}
                  <strong>28 December</strong> if you place your order within
                  the next <strong>17hrs 18mins</strong>
                </p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <GiReturnArrow className="border border-gray-100 p-3 w-16 h-16" />
                    <div className="mt-4">
                      {" "}
                      <p>Return Policy</p>
                      <p>
                        Free return within 7 days for ALL eligible items{" "}
                        <Link to="#" className="text-blue-500">
                          Details
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-2 py-2 bg-gray-50">
              <Link className="flex justify-between items-center border-b border-gray-300 pb-2">
                SELLER INFORMATION <IoIosArrowForward />
              </Link>
              <div className="border-b border-gray-300 py-4">
                <h1>DANA TECHNOLOGY</h1>
                <div className="flex justify-between items-center">
                  <div className="leading-4 text-sm">
                    <p>
                      <strong>88% </strong>Seller Score
                    </p>
                    <p>
                      <strong>9436</strong> Followers
                    </p>
                  </div>
                  <Link className="bg-orange-400 p-2 rounded text-white">
                    Follow
                  </Link>
                </div>
              </div>
              <div>
                <div>
                  <p className="flex items-center gap-2 mt-4">
                    Seller Performance{" "}
                    <RiInformation2Line className="hover:text-orange-500 w-6 h-6" />
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdStar className="text-white bg-green-400  w-4 rounded-full" />{" "}
                  <p>
                    Shipping speed: <strong>Excellent</strong>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdStar className="text-white bg-green-400  w-4 rounded-full" />{" "}
                  <p>
                    Quality Score: <strong>Excellent</strong>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdStar className="text-white bg-green-400  w-4 rounded-full" />{" "}
                  <p>
                    Customer Rating: <strong>Average</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100  py-12 mt-11">
        <SponsordProducts />
        <div className="bg-white container mx-auto px-6 sm:px-8"></div>
      </div>
    </>
  );
};

export default Productpage;

