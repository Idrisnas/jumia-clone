import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

export const Cartcontext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  const calculateDiscountedPrice = (price, discount) => {
    const originalPrice = typeof price === "string" ? parseFloat(price.replace(/,/g, "")) : price;
    return discount > 0 ? originalPrice * (1 - discount / 100) : originalPrice;
  };

  // Fetch cart based on userId
  const fetchCart = useCallback(async () => {
    if (!userId) return;
    try {
      const response = await axios.get(`${Base_url}/carts?user_id=${userId}`);
      const cartItemsFromApi = response.data.cart_items || [];
      const cartItemsWithDetails = await Promise.all(
        cartItemsFromApi.map(async (item) => {
          const productResponse = await axios.get(`${Base_url}/products/${item.product_id}`);
          const productData = productResponse.data;
          const price = calculateDiscountedPrice(productData.price, productData.discount);
          return {
            ...item,
            title: productData.title,
            descp: productData.descp,
            images: productData.images,
            price,
            currency: productData.currency,
            discount: productData.discount || 0,
          };
        })
      );
      setCartItems(cartItemsWithDetails);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart:", error);
      setLoading(false);
    }
  }, [userId]);

  const getUserData = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUserId(user.id);
      return user;
    }
    return null;
  };

  useEffect(() => {
    const handleStorageChange = () => {
      getUserData(); // Update userId when localStorage changes
    };

    // Add event listener for localStorage changes
    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setUserId(null); // Reset userId in CartProvider
    console.log("User logged out");
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchCart();
    } else {
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, [userId, fetchCart]);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      const discountedPrice = calculateDiscountedPrice(item.price, item.discount);
      return acc + discountedPrice * item.quantity;
    }, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const addToCart = useCallback(async (product, quantity = 1) => {
    if (!userId) {
      const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingProductIndex = savedCart.findIndex((item) => item.product_id === product.id);

      if (existingProductIndex !== -1) {
        savedCart[existingProductIndex].quantity += quantity;
      } else {
        const productDetailsResponse = await axios.get(`${Base_url}/products/${product.id}`);
        const productData = productDetailsResponse.data;
        const price = calculateDiscountedPrice(productData.price, productData.discount);
        const newItem = {
          product_id: product.id,
          quantity,
          title: productData.title,
          descp: productData.descp,
          images: productData.images,
          price,
          currency: productData.currency,
          discount: productData.discount || 0,
        };
        savedCart.push(newItem);
      }

      setCartItems(savedCart);
      localStorage.setItem("cartItems", JSON.stringify(savedCart));
      alert("Item added to cart successfully!");
      return;
    }

    try {
      const response = await axios.post(`${Base_url}/carts`, {
        quantity,
        user_id: userId,
        product_id: product.id,
        has_variation: false,
      });

      if (response.data.code === 200 && response.data.type === "SUCCESS") {
        const existingProductIndex = cartItems.findIndex((item) => item.product_id === product.id);

        if (existingProductIndex !== -1) {
          const updatedCart = [...cartItems];
          updatedCart[existingProductIndex].quantity += quantity;
          setCartItems(updatedCart);
        } else {
          const productDetailsResponse = await axios.get(`${Base_url}/products/${product.id}`);
          const productData = productDetailsResponse.data;
          const price = calculateDiscountedPrice(productData.price, productData.discount);
          const newItem = {
            product_id: product.id,
            quantity,
            title: productData.title,
            descp: productData.descp,
            images: productData.images,
            price,
            currency: productData.currency,
            discount: productData.discount || 0,
          };
          setCartItems((prevItems) => [...prevItems, newItem]);
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        alert("Item added to cart successfully!");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }, [userId, cartItems]);

  const removeFromCart = useCallback(async (productId) => {
    if (!userId) return;
    try {
      const response = await axios.delete(`${Base_url}/carts`, {
        data: { user_id: userId, product_id: productId },
      });

      if (response.data.code === 200 && response.data.type === "SUCCESS") {
        setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== productId));
        localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((item) => item.product_id !== productId)));
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  }, [userId, cartItems]);

  const clearCart = useCallback(async () => {
    if (!userId) return;
    try {
      const response = await axios.delete(`${Base_url}/carts`, {
        data: { user_id: userId },
      });

      if (response.data.code === 200 && response.data.type === "SUCCESS") {
        setCartItems([]);
        setTotalAmount(0);
        localStorage.setItem("cartItems", JSON.stringify([]));
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  }, [userId]);

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.product_id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.product_id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <Cartcontext.Provider value={{
      cartItems,
      totalAmount,
      loading,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity,
      userId,
      setUserId,
      handleLogout
    }}>
      {children}
    </Cartcontext.Provider>
  );
};
