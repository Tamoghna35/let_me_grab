/** @format */

import React from "react";

const ProductViewModal = ({ product, onClose }) => {
  if (!product) return null; // Don't render if no product is selected
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-1/2">
        <h2 className="text-xl font-bold mb-4">Product Details</h2>
        <p>
          <strong>Title:</strong> {product.title}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductViewModal;
