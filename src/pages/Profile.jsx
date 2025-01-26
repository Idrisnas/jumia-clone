import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  
import { FaFacebook } from 'react-icons/fa';

const Base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();  // Hook for navigation

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const createUser = async () => {
    if (!firstName || !lastName || !email || !phone || !password) {
      setErrorMessage("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post(`${Base_url}/users`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        password: password,
      });
      setSuccessMessage('User created successfully!');
      setErrorMessage('');
      navigate('/login'); 
    } catch (error) {
      setErrorMessage('Error creating user');
      setSuccessMessage('');
      alert('Wrong login details');
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
        Type your e-mail or phone number to log in or create a Jumia account.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-lg  my-2">
        {errorMessage && <p className="text-red-500 text-center mb-2">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-center mb-2">{successMessage}</p>}

        <div className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>

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

          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>

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
          <p>Already have an account? 
            <Link
            to={'/login'}
              onClick={() => navigate('/login')}
              className="text-green-500 cursor-pointer"
            >
              Login
            </Link>
          </p>

          <button
            onClick={createUser}
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Create User
          </button>
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

export default Profile;
