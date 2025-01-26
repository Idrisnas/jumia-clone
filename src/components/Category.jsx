import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";
const storedMerchantData = localStorage.getItem("merchantResponse");

const Category = () => {
  const [merchantData, setMerchantData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]); // State for categories
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For errors
  const [isLoading, setIsLoading] = useState(false);

  // Fetch merchant data from localStorage
  useEffect(() => {
    const fetchMerchantData = () => {
      const storedMerchantData = localStorage.getItem("merchantResponse");

      if (storedMerchantData) {
        try {
          const parsedData = JSON.parse(storedMerchantData);
          setMerchantData(parsedData);
        } catch (error) {
          console.error("Error parsing merchant data:", error);
          setMerchantData(null);
        }
      } else {
        console.error("No merchant data found in localStorage.");
        setMerchantData(null);
      }

      setLoading(false);
    };

    fetchMerchantData();
  }, []);

  const fetchCategories = async () => {
    if (!merchantData) return; 

    const { id } = merchantData; 
    try {
      const response = await axios.get(`${Base_url}/categories?merchant_id=${id}`);
      console.log("Fetched Categories:", response.data); 
      setCategories(response.data); 
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Create a new category
  const createCategory = async () => {
    if (!categoryName) {
      alert("Please enter a category name.");
      return;
    }

    if (!merchantData) {
      alert("Merchant data is missing.");
      return;
    }

    const { id } = merchantData; 

    const categoryData = {
      merchant_id: id, 
      name: categoryName,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(`${Base_url}/categories`, categoryData);
      console.log("Category created:", response.data);

      alert("Category created successfully!");

      setCategoryName("");

      // Display categories 
      await fetchCategories();
      setIsLoading(false);
    } catch (error) {
      console.error("Error creating category:", error);
      setErrorMessage("Failed to create category. Please try again.");
      setIsLoading(false); 
    }
  };

  // Delete category by ID
const deleteCategory = async (categoryId) => {
  if (!merchantData) {
    alert("Merchant data is missing.");
    return;
  }

  // Show confirmation dialog before proceeding with deletion
  const isConfirmed = window.confirm("Are you sure you want to delete this category? This action cannot be undone.");
  
  if (!isConfirmed) {
    return; // If not confirmed, exit the function without doing anything
  }

  try {
    setIsLoading(true);
    const response = await axios.delete(`${Base_url}/categories/${categoryId}`);
    console.log("Category deleted:", response.data);

    // Remove deleted category from the list
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryId)
    );

    alert("Category deleted successfully!");
    setIsLoading(false);
  } catch (error) {
    console.error("Error deleting category:", error);
    setErrorMessage("Failed to delete category. Please try again.");
    setIsLoading(false);
  }
};


  useEffect(() => {
    if (merchantData) {
      fetchCategories();
    }
  }, [merchantData]);

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 mt-16">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Welcome, {merchantData.firstName}!
            </h3>

            <h1>Merchant Information</h1>
            <p>
              <strong>First Name:</strong> {merchantData.first_name}
            </p>
            <p>
              <strong>Merchant ID:</strong> {merchantData.id}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <input
              type="text"
              placeholder="Enter category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="border p-2 mb-4 w-full rounded-md"
            />
            <button
              onClick={createCategory}
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              {isLoading ? "Adding..." : "Add Category"}
            </button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </div>

          {/* Display Categories */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">All Categories</h2>
            <ul>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <li key={category.id} className="mb-2 flex justify-between items-center">
                    <div>
                      <span className="font-bold">Category Name:</span> {category.name}
                      <span className="ml-4 text-gray-500">ID: {category.id}</span>
                    </div>
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </li>
                ))
              ) : (
                <p>No categories found.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
