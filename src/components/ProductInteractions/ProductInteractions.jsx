import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from './Reviews';
import Rating from './Rating';
import Likes from './Likes';

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const ProductInteractions = ({ productId }) => {
  const [reviews, setReviews] = useState([]); // Initialize as empty array
  const [ratings, setRatings] = useState([]);
  const [likes, setLikes] = useState([]);
  const [userLiked, setUserLiked] = useState(false);
  const [userRated, setUserRated] = useState(false);
  const [userId, setUserId] = useState(null);

  const getUserData = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUserId(user.id);
      return user;
    }
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = getUserData();
      if (!user) return;

      try {
        const [reviewsResponse, ratingsResponse, likesResponse] = await Promise.all([
          axios.get(`${Base_url}/reviews?product_id=${productId}`),
          axios.get(`${Base_url}/ratings?product_id=${productId}`),
          axios.get(`${Base_url}/likes?product_id=${productId}`),
        ]);

        setReviews(Array.isArray(reviewsResponse.data) ? reviewsResponse.data : []); // Set reviews as an array
        setRatings(ratingsResponse.data);
        setLikes(likesResponse.data);

        const userRating = ratingsResponse.data.find(rating => rating.user_id === user.id);
        setUserRated(!!userRating);
        setUserLiked(likesResponse.data.some(like => like.user_id === user.id));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <div className="max-w-3xl mx-auto p-6">


      <Rating
        productId={productId}
        userId={userId}
        userRated={userRated}
        ratings={ratings}
        setRatings={setRatings}
        setUserRated={setUserRated}
      />
      <Reviews
        productId={productId}
        userId={userId}
        reviews={reviews} // Pass the reviews as an array
        setReviews={setReviews}
        setUserReviewData={setReviews}
      />
      
      {/* <Likes
        productId={productId}
        userId={userId}
        userLiked={userLiked}
        likes={likes}
        setLikes={setLikes}
      /> */}
    </div>
  );
};

export default ProductInteractions;
