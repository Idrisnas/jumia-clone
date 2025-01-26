import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoMdInformationCircleOutline, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { Cartcontext } from "../context/CartContext";

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const CategoriesNav = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { addToCart } = useContext(Cartcontext);

  // Fetch categories and products
  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      const merchantData = JSON.parse(localStorage.getItem("merchantResponse"));
      if (!merchantData) {
        setErrorMessage("No merchant data found.");
        setLoading(false);
        return;
      }

      try {
        // Fetch categories
        const categoryResponse = await axios.get(
          `${Base_url}/categories?merchant_id=${merchantData.id}`
        );
        setCategories(categoryResponse.data);

        // Fetch products for each category
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

        // Automatically filter products for the first category once products are loaded
        if (categoryResponse.data.length > 0) {
          setFilteredProducts(productsByCat[categoryResponse.data[7].id]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories or products:", error);
        setErrorMessage("Failed to load categories or products.");
        setLoading(false);
      }
    };

    fetchCategoriesAndProducts();
  }, []);

  // Calculate discounted price
  const calculateDiscountedPrice = (product) => {
    const originalPrice = product.price ? parseFloat(product.price.replace(/,/g, "")) : 0;
    const discount = product.has_discount ? 0.2 : 0; // Example: 20% discount if `has_discount` is true
    return discount > 0 ? originalPrice * (1 - discount) : originalPrice;
  };

  // Handle search
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(query, sortBy);
  };

  // Handle sorting
  const handleSort = (event) => {
    const sortOption = event.target.value;
    setSortBy(sortOption);
    filterProducts(searchQuery, sortOption);
  };

  // Filter and sort products
  const filterProducts = (searchQuery, sortBy) => {
    let filtered = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.descp.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortBy) {
      case "priceLowToHigh":
        filtered.sort((a, b) => calculateDiscountedPrice(a) - calculateDiscountedPrice(b));
        break;
      case "priceHighToLow":
        filtered.sort((a, b) => calculateDiscountedPrice(b) - calculateDiscountedPrice(a));
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      default:
        filtered.sort((a, b) => b.sales - a.sales); // Popularity
        break;
    }

    setFilteredProducts(filtered);
  };

  // Handle adding products to the cart
  const handleAddToCart = (product) => {
    const discountedPrice = calculateDiscountedPrice(product);
    if (isNaN(discountedPrice) || discountedPrice <= 0) return;
    addToCart(product, discountedPrice);
  };

  if (loading) return <div>Loading...</div>;
  if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <div className="flex gap-2">
      {/* Sidebar */}
      <div className="bg-white w-[20%] p-2 leading-8 mt-12">
        <p>CATEGORY</p>
        <div className="flex flex-col">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id} className="hover:bg-gray-200 p-2">
              {category.name}
            </Link>
          ))}
        </div>

        {/* Delivery and Filter Options */}
        <div className="border-b-2 p-2 border-gray-200">
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
          <p className="font-bold">BRAND</p>
          {["915 Generation", "Ace Elec", "Adroit Fashion", "Alpha SS", "Ao Eyewear"].map((brand) => (
            <div className="flex items-center gap-5" key={brand}>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="bg-orange-500 hover:bg-orange-300 p-4 rounded-full" />
                <p className="text-gray-700">{brand}</p>
              </label>
            </div>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-sm mx-auto">
          <input
            type="search"
            className="w-full pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <IoMdSearch className="absolute left-3 top-2.5 text-gray-500" />
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

        {/* Product List */}
        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.map((product) => {
            const discountedPrice = calculateDiscountedPrice(product);
            const originalPrice = product.price ? parseFloat(product.price.replace(/,/g, "")) : 0;
            return (
              <div key={product.id} className="border p-4 rounded-lg shadow-md">
                <Link to={`/product/${product.id}`} className="relative">
                  <img
                    src={product.images[0] || "https://via.placeholder.com/150"}
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
                  <h3 className="text-sm text-gray-600 truncate">{product.descp}</h3>
                  <div>
                    {product.has_discount ? (
                      <>
                        <p className="text-sm font-semibold">{product.currency}: {discountedPrice.toFixed(2)}</p>
                        <p className="text-sm font-semibold line-through text-gray-400">{product.currency}: {originalPrice.toFixed(2)}</p>
                      </>
                    ) : (
                      <span className="text-lg font-semibold text-gray-900">{product.currency}: {originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <div>
                    <p>{product.quantity} items left</p>
                    <div className="bg-gray-500 h-2 rounded">
                      <div className="bg-orange-400 h-2 rounded" style={{ width: `${(product.quantity / 400) * 100}%` }}></div>
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
  );
};

export default CategoriesNav;
