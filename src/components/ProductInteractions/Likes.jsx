// Likes.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaThumbsUp } from 'react-icons/fa';

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const Likes = ({ productId, userId, userLiked, setLikes, likes }) => {
  const handleLike = async () => {
    if (!userId) {
      alert('Please log in to like this product');
      return;
    }

    if (userLiked) {
      try {
        await axios.delete(`${Base_url}/likes`, {
          data: {
            product_id: productId,
            user_id: userId,
          },
        });
        setLikes(likes.filter((like) => like.user_id !== userId));
      } catch (error) {
        console.error('Error unliking the product:', error);
      }
    } else {
      try {
        const response = await axios.post(`${Base_url}/likes`, {
          product_id: productId,
          user_id: userId,
        });
        setLikes([...likes, response.data]);
      } catch (error) {
        console.error('Error liking the product:', error);
      }
    }
  };

  return (
    <div className="like-section">
      <h3 className="text-xl font-semibold mb-2">{userLiked ? 'You liked this product' : 'Like this product'}</h3>
      <button
        onClick={handleLike}
        className="text-lg py-2 px-4 rounded-md border flex items-center justify-center space-x-2 hover:bg-gray-100"
      >
        <FaThumbsUp className={`${userLiked ? 'text-green-500' : 'text-gray-400'}`} />
        <span>{userLiked ? 'Unlike' : 'Like'}</span>
      </button>
      <p className="mt-2">{likes.length} Likes</p>
    </div>
  );
};

export default Likes;
