import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const FProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: (
      <div className="slick-next bg-gray-800 text-white rounded-full w-20 h-10 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 z-10  right-[-20px]">
        <IoIosArrowForward className="text-2xl bg-red-100 p-6" />
      </div>
    ),
    prevArrow: (
      <div className="slick-prev bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 z-10 opacity-70 hover:opacity-100 transition-opacity duration-300 left-0">
        <IoIosArrowForward className="text-2xl transform rotate-180" />
      </div>
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

  return (
    <div className="">
     

      <div>
        <div className="bg-white w-full">
          {categories.map((category) => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-500 p-2 flex justify-between items-center text-white font-semibold text-xl mb-0">
                <p className="text-2xl">{category.name}</p>
                <button
                  onClick={() => handleCategoryClick(category.id)}  className="flex gap-1 items-center">
                  <p>See All</p>
                  <IoIosArrowForward />
                </button>
              </div>

              <Slider {...settings}>
                {productsByCategory[category.id]?.map((product) => (
                  <div key={product.id} className="border p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <Link
              to={`/product/${product.id}`}

                     className="relative">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover rounded-md p-3 transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>

                    <div className="text-left leading-9 p-4 w-full text-black">
                      <h3 className="text-xl font-semibold">{product.title}</h3>
                      <p className="text-lg text-gray-700">{product.currency}:{product.price}</p>
                  
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FProductPage;
