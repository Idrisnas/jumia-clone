import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaPen } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const Ratings = ({ productId, userId, ratings, setRatings }) => {
  const [userRating, setUserRating] = useState(0);
  const [userRatingDataLocal, setUserRatingDataLocal] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch user's existing rating for the product
  useEffect(() => {
    const fetchUserRating = async () => {
      try {
        const response = await axios.get(`${Base_url}/ratings?product_id=${productId}`);
        const userRatingData = response.data.find((rating) => rating.user.id === userId);

        if (userRatingData) {
          setUserRatingDataLocal(userRatingData);
          setUserRating(userRatingData.value); // Display the existing rating in the stars
        }
      } catch (error) {
        setMessage('Error fetching your rating');
      }
    };

    fetchUserRating();
  }, [productId, userId]);

  // Validate rating
  const validateRating = () => {
    if (userRating === 0) {
      setError('Please select a rating');
      return false;
    }
    setError('');
    return true;
  };

  // Submit a new rating
  const handleRatingSubmit = async () => {
    if (!userId) {
      setMessage('Please log in to submit a rating');
      return;
    }

    if (!validateRating()) {
      return;
    }

    try {
      const response = await axios.post(`${Base_url}/ratings`, {
        product_id: productId,
        user_id: userId,
        text: 'Good',  // Optional text for rating
        value: userRating,
      });
      setRatings([...ratings, response.data]);
      setUserRatingDataLocal(response.data);
      setUserRating(0);
      setMessage('Your rating has been submitted successfully');
    } catch (error) {
      setMessage('Error submitting your rating');
    }
  };

  // Update rating
  const handleRatingUpdate = async () => {
    if (!userRatingDataLocal) {
      setMessage('No rating found to update');
      return;
    }

    if (!validateRating()) {
      return;
    }

    try {
      const response = await axios.put(`${Base_url}/ratings`, {
        product_id: productId,
        user_id: userId,
        text: 'Good',  // Optional text for rating
        value: userRating,
      });
      setRatings((prevRatings) =>
        prevRatings.map((rating) =>
          rating.id === userRatingDataLocal.id ? response.data : rating
        )
      );
      setUserRatingDataLocal(response.data);
      setUserRating(0); // Clear the rating selection
      setIsEditing(false);
      setMessage('Your rating has been updated successfully');
    } catch (error) {
      setMessage('Error updating your rating');
    }
  };

  // Delete rating
  const handleDeleteRating = async () => {
    if (!userRatingDataLocal) {
      setMessage('No rating found to delete');
      return;
    }

    try {
      await axios.delete(`${Base_url}/ratings`, {
        data: {
          product_id: productId,
          user_id: userId,
        },
      });
      setRatings((prevRatings) => prevRatings.filter((rating) => rating.id !== userRatingDataLocal.id));
      setUserRatingDataLocal(null);
      setUserRating(0);
      setMessage('Your rating has been deleted');
    } catch (error) {
      setMessage('Error deleting your rating');
    }
  };

  // Calculate average rating
  const averageRating = ratings.length
    ? (ratings.reduce((sum, rating) => sum + rating.value, 0) / ratings.length).toFixed(1)
    : 'No ratings yet';

  return (
    <div className="rating-section mb-8 p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      {/* Show success or error messages */}
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

      {/* Rating display and interaction */}
      {!userRatingDataLocal ? (
        <>
          <div className="flex space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${userRating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => setUserRating(star)}
              />
            ))}
          </div>
          <button
            onClick={handleRatingSubmit}
            className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Submit Rating
          </button>
        </>
      ) : (
        <div className="user-rating mt-6 p-4 border border-gray-300 rounded-lg shadow-md">
          <p className="font-semibold text-lg text-gray-800">Your Rating:</p>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${userRatingDataLocal.value >= star ? 'text-yellow-500' : 'text-gray-400'}`}
              />
            ))}
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => {
                setIsEditing(true);
                setUserRating(userRatingDataLocal.value);
              }}
              className="text-yellow-500 hover:text-yellow-700 transition duration-300"
            >
              {/* <FaPen /> */}
               Edit
            </button>
            <button
              onClick={handleDeleteRating}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              {/* <FaTrash />  */}
              Delete
            </button>
          </div>
        </div>
      )}

      {/* If editing, show the rating input */}
      {isEditing && (
        <>
          <div className="flex space-x-1 mb-4 mt-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${userRating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => setUserRating(star)}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleRatingUpdate}
              className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Update Rating
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

      {/* Display average rating */}
      <div className="mt-6">
        <h4 className="text-lg font-medium">Average Rating:</h4>
        <p>{averageRating}</p>
      </div>
    </div>
  );
};

export default Ratings;
