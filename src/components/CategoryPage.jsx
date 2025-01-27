import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IoMdInformationCircleOutline, IoMdSearch } from "react-icons/io";
import { Cartcontext } from "../context/CartContext";

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const CategoryPage = () => {
  const { categoryId } = useParams(); // Get categoryId from URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity"); // Default sort by Popularity
  const { addToCart } = useContext(Cartcontext);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      // const merchantData = JSON.parse(localStorage.getItem("merchantResponse"));

      // if (!merchantData) {
      //   setErrorMessage("No merchant data found.");
      //   setLoading(false);
      //   return;
      // }

      try {
        const productResponse = await axios.get(`${Base_url}/products`, {
          params: {
            merchant_id: "675ff0a456d563e5aeba86ea",
            category_id: categoryId,
          },
        });
        setProducts(productResponse.data.data);
        setFilteredProducts(productResponse.data.data); // Initialize with all products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category or products:", error);
        setErrorMessage("Failed to load products.");
        setLoading(false);
      }
    };

    fetchCategoryDetails();
  }, [categoryId]);

  // Loading and Error Handling
  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  // Price Calculation Function
  const calculateDiscountedPrice = (product) => {
    const originalPrice = product.price
      ? parseFloat(product.price.replace(/,/g, ""))
      : 0;
    const discount = product.has_discount ? 0.2 : 0; // Example: 20% discount if `has_discount` is true
    return discount > 0 ? originalPrice * (1 - discount) : originalPrice;
  };

  // Handle Add to Cart Logic
  const handleAddToCart = (product) => {
    const discountedPrice = calculateDiscountedPrice(product);
    if (isNaN(discountedPrice) || discountedPrice <= 0) {
      console.error("Calculated discounted price is invalid:", discountedPrice);
      return;
    }

    addToCart(product, discountedPrice);
  };

  // Handle Search
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(query, sortBy);
  };

  // Handle Sorting
  const handleSort = (event) => {
    const sortOption = event.target.value;
    setSortBy(sortOption);
    filterProducts(searchQuery, sortOption);
  };

  // Filter and Sort Products based on search and sort criteria
  const filterProducts = (searchQuery, sortBy) => {
    let filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.descp.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "priceLowToHigh") {
      filtered = filtered.sort((a, b) => {
        const priceA = calculateDiscountedPrice(a);
        const priceB = calculateDiscountedPrice(b);
        return priceA - priceB;
      });
    } else if (sortBy === "priceHighToLow") {
      filtered = filtered.sort((a, b) => {
        const priceA = calculateDiscountedPrice(a);
        const priceB = calculateDiscountedPrice(b);
        return priceB - priceA;
      });
    } else if (sortBy === "newest") {
      filtered = filtered.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else {
      // Popularity: Assuming products with higher sales count are more popular
      filtered = filtered.sort((a, b) => b.sales - a.sales);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="mt-20">
      <div className=" ">
        <Link to={"/home"}>Home</Link>
      </div>

      <div className="p-2 bg-gray-200 mx-auto w-[80%] flex justify-center overflow-hidden">
        <img
          src="https://ng.jumia.is/cms/0-1-christmas-sale/2024/FLASH-SALE_1152x252.gif"
          alt=""
          className="transform transition-transform duration-300 ease-in-out hover:scale-105 w-full h-[250px]"
        />
      </div>

      <div className="m-auto w-[90%]  p-2">
        <p className="text-center">flex</p>

        <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
          <Link
            to={"/"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/featured-categories/phones-tablets_260x144.png"
              alt="Essential"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Phones & Tablets
            </p>
          </Link>
          <Link
            to={"/"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-1-initiatives/flashsale/new-price-drop_260x144.png"
              alt="Beauty Desk"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Home & Appliances
            </p>
          </Link>
          <Link
            to={"/"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/featured-categories/electronics_260x144.png"
              alt="Fashion Deals"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Electronics
            </p>
          </Link>
          <Link
            to={"/appdeals"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/health-beauty-deals_260x144.png"
              alt="Special Offer"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Health & Beauty
            </p>
          </Link>
          <Link
            to={"/updiscount"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/featured-categories/fashion_260x144.png"
              alt="home-essentials"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Fashion
            </p>
          </Link>
          <Link
            to={"/phones&tab"}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/featured-categories/groceries_260x144.png"
              alt="              Computing Deals
"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 mb-1 font-medium text-lg text-gray-800">
              Groceries
            </p>
          </Link>
        </div>
      </div>

      <div className="flex gap-2">
        {/* Sidebar */}
        <div className="bg-white w-[20%] p-2 leading-8 mt-12">
          <div>
            <p>CATEGORY</p>
            <div className="flex flex-col">
              {[
                "Computing",
                "Electronics",
                "Sporting Goods",
                "Garden & Outdoors",
                "Phones & Tablets",
                "Toys & Games",
                "Fashion",
                "Home & Office",
                "Automobile",
                "Health & Beauty",
                "Baby Products",
                "Industrial & Scientific",
              ].map((category) => (
                <Link to={"/"} key={category} className="hover:bg-gray-200 p-2">
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-y-2 p-2 border-gray-200">
            <h1 className="text-xs font-bold mb-2">EXPRESS DELIVERY</h1>
            <div className="flex items-center gap-5">
              <input type="checkbox" className="bg-orange-500" />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7K9Yo4AlkBBIEAeds_CBDmYjnAOe9Nc9Vlw&s"
                alt=""
                className="w-24"
              />
              <IoMdInformationCircleOutline className="w-[150px] hover:text-orange-500" />
            </div>
          </div>
          <div className="border-b-2 p-2 border-gray-200">
            <div className="flex items-center gap-5">
            <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="bg-orange-500 hover:bg-orange-300 p-4 rounded-full "
                  id="shippedFromNigeria"
                />
                <p className="text-gray-700">Shipped from Abroad</p>
              </label>
            </div>
            <div className="flex items-center gap-5 ">
              {/* Label wraps the checkbox and the text */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                     className="bg-gray-200 rounded transition-all hover:bg-orange-500 p-4"
                  id="shippedFromNigeria"
                />
                <p className="text-gray-700">Shipped from Nigeria</p>
              </label>
            </div>
           
          </div>
          <div className="border-b-2 p-2 border-gray-200">
            <p className="font-bold">BRAND</p>

            <div className="relative w-full max-w-sm mx-auto">
              <input
                type="search"
                name=""
                id=""
                className="w-full pl-10  rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Search for products..."
              />
              <IoMdSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>


            <div className="border-b-2 p-2 border-gray-200">
            <div className="flex items-center gap-5">
            <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="bg-orange-500 hover:bg-orange-300 p-4 rounded-full "
                  id="shippedFromNigeria"
                />
                <p className="text-gray-700">915 Generation</p>
              </label>
            </div>
            <div className="flex items-center gap-5 ">
              {/* Label wraps the checkbox and the text */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                     className="bg-gray-200 rounded transition-all hover:bg-orange-500 p-4"
                  id="shippedFromNigeria"
                />
                <p className="text-gray-700">Ace Elec</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
            <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="bg-orange-500 hover:bg-orange-300 p-4 rounded-full "
                  id="shippedFromNigeria"
                />
                <p className="text-gray-700">Adroit Fashion</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
            <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="bg-orange-500 hover:bg-orange-300 p-4 rounded-full "
                  id="shippedFromNigeria"
                />
                <p className="text-gray-700">Alpha SS</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
            <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="bg-orange-500 hover:bg-orange-300 p-4 rounded-full "
                  id="shippedFromNigeria"
                />
                <p className="text-gray-700">Ao Eyewear</p>
              </label>
            </div>
          </div>

          </div>
        </div>

        {/* Product Sorting and Search */}
        <div className="bg-gray-100 mt-16 p-8 w-full">
        

          <div className="flex justify-between mb-6">
            <input
              type="text"
              className="px-4 py-2 border rounded-lg w-1/3"
              placeholder="Search Products..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <select
              className="border p-2 rounded-lg"
              onChange={handleSort}
              value={sortBy}
            >
              <option value="popularity">Popularity</option>
              <option value="newest">Newest Arrivals</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {filteredProducts.map((product) => {
              const discountedPrice = calculateDiscountedPrice(product);
              const originalPrice = product.price
                ? parseFloat(product.price.replace(/,/g, ""))
                : 0;
              <p className="text-3xl">{product.descp}</p>;

              return (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg shadow-md"
                >
                  <Link to={`/product/${product.id}`} className="relative">
                    <img
                      src={
                        product.images[0] || "https://via.placeholder.com/150"
                      }
                      alt={product.title}
                      className="w-full object-cover rounded-md p-3 transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.has_discount && (
                      <p className="absolute top-2 right-2 text-orange-600 bg-orange-200 px-2 py-1 text-sm font-bold rounded">
                        - 20% OFF
                      </p>
                    )}
                  </Link>

                  <div className="text-left leading-9 p-4 w-full text-orange">
                    <h3 className="text-sm text-gray-600 truncate">
                      {product.descp}
                    </h3>

                    <div>
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
                        <div
                          className="bg-orange-400 h-2 rounded"
                          style={{
                            width: `${(product.quantity / 400) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="mt-6 px-6 py-3 w-full bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 transition-all"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
