/** @format */

import React from "react";

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[300px] bg-white border border-gray-300 rounded shadow-lg z-50">
      <div className="p-4 relative text-center">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-gray-500 hover:text-red-600 text-xl"
        >
          &times;
        </button>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default Popup;
