import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaPen } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const Reviews = ({ productId, userId, setReviews }) => {
  const [userReview, setUserReview] = useState('');
  const [userReviewDataLocal, setUserReviewDataLocal] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`${Base_url}/reviews?product_id=${productId}`);
        const userReview = response.data.find((review) => review.user.id === userId);
        if (userReview) {
          setUserReviewDataLocal(userReview);
          setUserReview(userReview.text);
        }
      console.log(response.data);

      } catch (error) {
        setMessage('Error fetching your review');
      }
    };
    fetchReview();
  }, [productId, userId]);

  const validateReview = () => {
    if (userReview.trim() === '') {
      setError('Review cannot be empty');
      return false;
    }
    if (userReview.length < 10) {
      setError('Review must be at least 10 characters long');
      return false;
    }
    setError('');
    return true;
  };

  const handleReviewSubmit = async () => {
    if (!userId) {
      setMessage('Please log in to submit a review');
      // Navigate("/profile");
      
      return;
    }

    if (!validateReview()) {
      return;
    }

    try {
      const response = await axios.post(`${Base_url}/reviews`, {
        product_id: productId,
        user_id: userId,
        text: userReview,
      });
      console.log(response.data);

      setReviews((prevReviews) => [...prevReviews, response.data]);
      setUserReview('');
      setUserReviewDataLocal(response.data);
      setMessage('Your review has been submitted successfully');
      window.location.reload();

    } catch (error) {
      setMessage('Error submitting your review');
    }
  };

  const handleReviewUpdate = async () => {
    if (!userReviewDataLocal) {
      setMessage('No review found to update');
      return;
    }

    if (!validateReview()) {
      return;
    }

    try {
      const response = await axios.put(`${Base_url}/reviews/${userReviewDataLocal.id}`, {
        user_id: userId,
        text: userReview,
      });
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === userReviewDataLocal.id ? response.data : review
        )
      );
      setUserReviewDataLocal(response.data);
      setUserReview('');
      setIsEditing(false);
      setMessage('Your review has been updated successfully');
      console.log(response.data);

      window.location.reload();
    } catch (error) {
      setMessage('Error updating your review');
    }
  };

  const handleDeleteReview = async () => {
    if (!userReviewDataLocal) {
      setMessage('No review found to delete');
      return;
    }

    try {
      await axios.delete(`${Base_url}/reviews`, {
        data: {
          review_id: userReviewDataLocal.id,
          user_id: userId,
        },
      });
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== userReviewDataLocal.id));
      setUserReviewDataLocal(null);
      setUserReview('');
      setMessage('Your review has been deleted');
      window.location.reload();
    } catch (error) {
      setMessage('Error deleting your review');
    }
  };

  return (
    <div className="reviews-section mb-8 p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      {/* <h3 className="text-2xl font-semibold mb-4 text-gray-800">Your Review</h3> */}

      {message && (
        <div className={`message mb-4 p-2 text-white ${message.includes('Error') ? 'bg-red-500' : 'bg-green-500'} rounded-md`}>
          {message}
        </div>
      )}

      {error && (
        <div className="mb-4 p-2 text-white bg-red-500 rounded-md">
          {error}
        </div>
      )}

      {!userReviewDataLocal ? (
        <>
          <textarea
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
            placeholder="Write a review..."
            className="w-full h-32 border border-orange-500 p-4 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={handleReviewSubmit}
            className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Submit Review
          </button>
        </>
      ) : (
        <div className="user-review mt-6 p-4 border border-gray-300 rounded-lg shadow-md">
          <p className="font-semibold text-lg text-gray-800">Your Review:</p>
            


            <div className='flex gap-2 items-center text-lg '>
                <p className=' font bold'>Reviewed by</p>
                <p className='text-orange-400'>{userReviewDataLocal.user.first_name}</p>
                <span>on</span>
                <p>{userReviewDataLocal.created_at}</p>
            </div>
          

          <div className="flex gap-6 ">
            <button
              onClick={() => {
                setIsEditing(true);
                setUserReview(userReviewDataLocal.text);
              }}
              className="text-yellow-500 hover:text-yellow-700 transition duration-300"
            >
              {/* <FaPen /> */}
               Edit
            </button>
            <button
              onClick={handleDeleteReview}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              {/* <FaTrash />  */}
              Delete
            </button>
          </div>
        </div>
      )}

      {isEditing && (
        <>
          <textarea
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
            placeholder="Update your review..."
            className="w-full h-32 border border-orange-500 p-4 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <div className="flex gap-4">
            <button
              onClick={handleReviewUpdate}
              className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Update Review
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Reviews;
