import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { Cartcontext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, totalAmount, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, loading, userId, handleLogout } = useContext(Cartcontext);
  const [loadingAction, setLoadingAction] = useState(false);
  const navigate = useNavigate();

  // Remove item from cart
  const handleRemoveFromCart = async (id) => {
    setLoadingAction(true);
    await removeFromCart(id);
    setLoadingAction(false);
  };

  // Handle checkout process
  const handleCheckout = async () => {
    if (!userId) {
      alert("Please log in to proceed to checkout.");
      navigate('/profile');
      return;
    }
  
    setLoadingAction(true);
    setTimeout(() => {
      setLoadingAction(false);
      navigate('/checkout');
    }, 2000);
  };

  // Loading state
  // if (loading) {
  //   return <div className="h-screen mt-20 flex justify-center items-center text-center text-2xl">Loading your cart...</div>;
  // }

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center text-center text-2xl mt-20">
        <p>
          Your cart is empty.{" "}
          <Link to="/Homepage" className="text-blue-500">Go back to Shop</Link>
        </p>
      </div>
    );
  }

  // Calculate discounted price
  const calculateDiscountedPrice = (price, discount) => {
    const originalPrice = typeof price === "string" ? parseFloat(price.replace(/,/g, "")) : price;
    return discount > 0 ? originalPrice * (1 - discount / 100) : originalPrice;
  };

  // Calculate the total amount
  const totalAmountWithDiscount = cartItems.reduce((total, item) => {
    const discountedPrice = calculateDiscountedPrice(item.price, item.discount);
    return total + discountedPrice * item.quantity;
  }, 0);

  return (
    <div className="bg-gray-100 py-12 mt-11">
      <div className="container mx-auto px-6 sm:px-8 flex gap-2">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[70%]">
          <h1 className="text-3xl font-bold text-center py-6">Your Cart</h1>
          <div className="space-y-4">
            {cartItems.map((item) => {
              const discountedPrice = calculateDiscountedPrice(item.price, item.discount);
              return (
                <div key={item.product_id} className="p-4 border-b">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.images[0] || "default-image.jpg"}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div>
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p className="text-gray-500">{item.descp}</p>
                        <div className="flex items-center gap-2 text-gray-500">
                          <button
                            onClick={() => decreaseQuantity(item.product_id)}
                            className="px-2 py-1 bg-gray-300 rounded-full"
                            disabled={loadingAction || item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.product_id)}
                            className="px-2 py-1 bg-gray-300 rounded-full"
                            disabled={loadingAction}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold">
                        {item.currency}: {(discountedPrice * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-orange-600 flex gap-1 items-center"
                    onClick={() => handleRemoveFromCart(item.product_id)}
                    disabled={loadingAction}
                  >
                    <MdDeleteOutline />
                    {loadingAction ? "Removing..." : "Remove"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 w-[30%]">
          <div className="mb-4">
            <p className="font-semibold text-lg">CART SUMMARY</p>
            <div className="flex justify-between text-lg font-semibold py-2">
              <span>Subtotal:</span>
              <p className="text-lg font-semibold">NGN: {totalAmountWithDiscount.toFixed(2)}</p>
            </div>
            <p>Delivery fees not included</p>

            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={() => {
                  if (!loadingAction) clearCart();
                }}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                disabled={loadingAction}
              >
                {loadingAction ? "Clearing..." : "Clear Cart"}
              </button>
              <button
                onClick={handleCheckout}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                disabled={loadingAction}
              >
                {loadingAction ? "Processing Checkout..." : "Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
