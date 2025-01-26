import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="my-7 flex flex-col items-center text-center w-[90%] sm:w-[80%] m-auto p-6 rounded-lg shadow-lg">
    <div className="my-4">
      <img
        src="https://my.jumia.com.ng/pictures/myjumia/myjumia-top-logo.png"
        alt="Jumia Logo"
        className="w-20"
      />
    </div>
    <h1 className="text-2xl font-bold  my-4">Welcome to Jumia</h1>
    <p className=" text-center my-4">
      Type your e-mail or phone number to log in or create a Jumia account.
    </p>

    <form>
      <div className="relative w-72 mb-6">
        <input
          type="text"
          id="emailOrPhone"
          value={value}
          onChange={handleChange}
          placeholder="Enter email or phone number"
          className="w-full py-3 px-4 text-base text-gray-700 placeholder-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500 peer"
        />
        <label
          htmlFor="emailOrPhone"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-base transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500"
        >
          Enter email or phone number
        </label>
      </div>

      <button className="bg-orange-400 text-white text-lg rounded font-bold w-full py-2">
        Continue
      </button>
    </form>

    <div className="leading-5 my-4">
      <p className="text-center ">
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
        For further support, you may visit the Help Center or contact our
        customer service team.
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

export default SignUp;
