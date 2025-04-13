/** @format */

import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !password || !email || !confirmPassword) {
      setMessage("All fields are required");
      setShowPopup(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setShowPopup(true);
      return;
    }

    const newUser = { username, password, email, confirmPassword };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Signup successful!");
    setShowPopup(true);
    setUsername("");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
  };

  const closePopup = () => {
    setShowPopup(false);
    setMessage("");
  };

  return (
    <div className="bg-emerald-100 h-screen flex w-full">
      <div className="w-1/3 h-3/4 mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {/* Popup */}
        {showPopup && (
          <div className="fixed top-14 left-1/2 transform -translate-x-1/2 w-[300px] bg-white border border-gray-300 rounded shadow-lg z-50">
            <div className="p-4 relative text-center">
              {/* Close Icon */}
              <button
                onClick={closePopup}
                className="absolute top-1 right-2 text-gray-500 hover:text-red-600 text-xl"
              >
                &times;
              </button>
              <p className="text-sm text-gray-700">{message}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4 ">
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
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
