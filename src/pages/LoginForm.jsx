import React, { useContext, useState } from 'react';
import { Cartcontext } from "../context/CartContext";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const LoginForm = () => {
  const { setUserId } = useContext(Cartcontext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const checkUserExists = async (email) => {
    try {
      const response = await axios.get(`${Base_url}/users?email=${email}`);
      return response.data && response.data.length > 0;
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  };

  const loginUser = async () => {
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const userExists = await checkUserExists(email);
    if (!userExists) {
      setErrorMessage("User does not exist.");
      setSuccessMessage('');
      return;
    }

    try {
      const response = await axios.post(`${Base_url}/users/login`, {
        email: email,
        password: password,
      });

      console.log('Login response:', response.data);

      if (response.data && response.data.msg === "Invalid username or password") {
        setErrorMessage("Invalid username or password.");
        setSuccessMessage('');
      } else {
        console.log('User logged in:', response.data);
        setSuccessMessage('Logged in successfully!');
        setErrorMessage('');
        
        const userData = {
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          phone: response.data.phone,
        };

        // Store user data in localStorage and update context
        localStorage.setItem("user", JSON.stringify(userData));
        setUserId(response.data.id); // Update userId in context

        navigate('/HomePage'); // Navigate to homepage after login
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Error logging in');
      setSuccessMessage('');
    }
  };

  return (
    <div className="my-7 flex flex-col items-center mt-24 w-[90%] sm:w-[80%] m-auto p-6 rounded-lg shadow-lg">
      <div className="my-2">
        <img
          src="https://my.jumia.com.ng/pictures/myjumia/myjumia-top-logo.png"
          alt="Jumia Logo"
          className="w-20"
        />
      </div>
      <h1 className="text-2xl font-bold ">Welcome to Jumia</h1>
      <p className="text-center ">
        Type your e-mail or Password to log in to your Jumia account.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-lg  my-2">
        {errorMessage && <p className="text-red-500 text-center mb-2">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-center mb-2">{successMessage}</p>}

        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <button
            onClick={loginUser}
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Login
          </button>
        </div>

        {/* "Don't have an account? Sign Up" */}
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/profile')} // Navigate to the sign-up page
              className="text-green-500 cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
      <div className="leading-5 my-4 text-center">
        <p className="text-center">
          By continuing you agree to Jumia’s{' '}
        </p>
        <Link className="underline text-orange-500">Terms and Conditions</Link>
      </div>

      <Link
        to="#"
        className="text-white flex justify-center my-5 font-bold items-center p-2 rounded w-[80%] sm:w-[60%] bg-blue-500 hover:bg-blue-400"
      >
        <FaFacebook className="mr-3" />
        <p>Log In With Facebook</p>
      </Link>

      <div className="text-center my-4 text-black">
        <p>
          For further support, you may visit the Help Center or contact our customer service team.
        </p>
      </div>

      <div className="my-4">
        <img
          src="https://my.jumia.com.ng/pictures/myjumia/myjumia-bottom-logo.png"
          alt="Jumia Logo"
        />
      </div>
    </div>
  );
};

export default LoginForm;
