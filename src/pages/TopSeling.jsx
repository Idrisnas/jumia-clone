

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const TopSelling = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
      <button className="slick-prev custom-prev-arrow" aria-label="Previous Slide">
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
    const fetchCategories = async () => {
      const merchantData = JSON.parse(localStorage.getItem("merchantResponse"));

      if (!merchantData) {
        setErrorMessage("No merchant data found.");
        setLoading(false);
        return;
      }

      try {
        const categoryResponse = await axios.get(
          `${Base_url}/categories?merchant_id=${merchantData.id}`
        );
        setCategories(categoryResponse.data);

        const productsByCat = {};

        for (const category of categoryResponse.data) {
          const productResponse = await axios.get(`${Base_url}/products`, {
            params: {
              merchant_id: merchantData.id,
              category_id: category.id,
            },
          });
          productsByCat[category.id] = productResponse.data.data;
        }

        setProductsByCategory(productsByCat);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories or products:", error);
        setErrorMessage("Failed to load categories or products.");
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const firstCategory = categories[2];

  // Function to calculate discounted price
  const calculateDiscountedPrice = (product) => {
    const originalPrice = product.price ? parseFloat(product.price.replace(/,/g, '')) : 0;
    const discount = product.has_discount ? 0.2 : 0; // Example: 20% discount if `has_discount` is true
    return discount > 0 ? originalPrice * (1 - discount) : originalPrice;
  };

  return (
    <div className="w-[95%] my-6 mx-auto bg-white relative">
      {firstCategory && (
        <div key={firstCategory.id} className="flashsales-item">
           <div className="p-2 flex justify-between items-center text-black font-semibold text-xl mb-0">
            <p className="text-2xl">{firstCategory.name}</p>
            <button
              onClick={() => handleCategoryClick(firstCategory.id)}
              className="flex gap-1 items-center text-orange-400"
            >
              <p>See All</p>
              <IoIosArrowForward />
            </button>
          </div>

          <Slider {...settings}>
            {productsByCategory[firstCategory.id]?.map((product) => {
              const discountedPrice = calculateDiscountedPrice(product);
              const originalPrice = product.price ? parseFloat(product.price.replace(/,/g, '')) : 0;
              const discount = product.has_discount ? 0.2 : 0;  // Example: Assuming 20% discount when `has_discount` is true

              return (
                <div
                key={product.id}
                className="border p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Link to={`/product/${product.id}`} className="relative">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-md p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Discount Badge */}
                  {product.has_discount && (
                    <p className="absolute top-2 right-2 text-orange-600 bg-orange-200 px-2 py-1 text-sm font-bold rounded">
                      - {discount * 100}% !
                    </p>
                  )}
                </Link>
              
                <div className="text-left leading-9 p-4 w-full text-orange">
                  {/* <h3 className="text-xl font-semibold">{product.title}</h3> */}
                  <h3 className="text-sm text-gray-600 truncate">{product.descp}</h3>
                  
                  <div className="">
                    {/* Show Discounted Price if Available */}
                    {product.has_discount ? (
                      <>
                        <p className="text-sm font-semibold">
                          {product.currency}: {discountedPrice.toFixed(2)}
                        </p>
                        <p className="text-sm font-semibold line-through text-gray-400">
                          {product.currency}: {originalPrice.toFixed(2)}
                        </p>
                      </>
                    ) : (
                      <span className="text-lg font-semibold text-gray-900">
                        {product.currency}: {originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <p>{product.quantity} items left</p>
                    <div className="bg-gray-500 h-2 rounded">
                      {/* Set the width dynamically based on the product quantity */}
                      <div
                        className="bg-orange-400 h-2 rounded"
                        style={{ width: `${(product.quantity / 100) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              );
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default TopSelling;
 
