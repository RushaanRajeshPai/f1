import React from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import loginbg from "../../Assets/loginbg.jpg";
import registerbg from "../../Assets/registerbg.jpg";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${registerbg})` }}>
        <form className="font-exo h-100 bg-white p-6 border-2 border-red-500 rounded-3xl shadow-md w-full max-w-sm">
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-6 flex justify-center">LOGIN</h1>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="font-exo text-lg font-bold uppercase px-6 h-12 bg-white text-black border-2 border-red-500 rounded-full shadow-md hover:bg-red-500 cursor-pointer hover:text-black transition-all duration-300 hover:shadow-red-500/50"
          >
            Login
          </button>
          <p className="p-2">
            Don't have an account yet?{" "}
            <span className="font-semibold cursor-pointer hover:underline underline-offset-4  decoration-red-500"
              onClick={() => navigate("/signup")}
            >
              "Box! Box!"
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
