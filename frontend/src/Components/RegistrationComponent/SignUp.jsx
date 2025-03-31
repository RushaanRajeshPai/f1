import React from "react";
import loginbg from "../../Assets/loginbg.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();

    if (selectedDate > today) {
      setError("Incorrect date: Date of birth cannot be in the future.");
    } else {
      setError("");
    }

    setDob(e.target.value);
  };
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginbg})` }}
      >
        <form className="font-exo bg-white p-6 border-2 border-red-500 rounded-3xl shadow-md w-full max-w-sm">
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-6 flex justify-center">
              SIGN UP
            </h1>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter your last name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mt-4 mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={handleDateChange}
                placeholder="Enter your Date of Birth"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="font-exo text-lg font-bold uppercase px-6 h-12 bg-white text-black border-2 border-red-500 rounded-full shadow-md hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-red-500/50"
          >
            Login
          </button>
          <p className="p-2">
            Already have an account yet?{" "}
            <span
              className="font-semibold cursor-pointer hover:underline underline-offset-4 decoration-red-500"
              onClick={() => navigate("/login")}
            >
              Login!
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
