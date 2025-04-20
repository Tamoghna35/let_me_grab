/** @format */

import React, { use, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Popup from "../../components/Popup/Popup";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  // const { setLoggedInUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("All fields are required");
      setShowPopup(true);
      return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists and the password matches
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setMessage("Login successful!");
      // setLoggedInUser(user);
      dispatch(setUser(user)); // Set logged-in user in Redux store
      navigate("/products"); // Redirect to products page
    } else {
      setMessage("Invalid username or password");
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setMessage("");
  };

  return (
    <div className="bg-emerald-100 h-screen flex w-full">
      <div className="w-1/3 h-2/4 mx-auto p-6 bg-white shadow-xl rounded-lg mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>

        {/* Popup */}
        {showPopup && <Popup message={message} onClose={closePopup} />}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
