/** @format */

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear logged-in user
    setLoggedInUser(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="w-full h-[50px] bg-amber-200 flex justify-between items-center px-10">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {loggedInUser ? (
          <>
            <span className="text-gray-700 font-medium">
              Welcome, {loggedInUser.username}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded outline-none focus:outline-none"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded outline-none focus:outline-none">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded outline-none focus:outline-none">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
