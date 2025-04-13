/** @format */

import React from "react";

const ProductUpdateModal = ({
  product,
  onClose,
  onSubmit,
  setUpdateProduct,
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-1/2">
        <h2 className="text-xl font-bold mb-4">Update Product</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={product.title}
            onChange={(e) =>
              setUpdateProduct({ ...product, title: e.target.value })
            }
            className="border p-2"
          />
          <input
            type="number"
            value={product.price}
            onChange={(e) =>
              setUpdateProduct({
                ...product,
                price: parseFloat(e.target.value),
              })
            }
            className="border p-2"
          />
          <textarea
            value={product.description}
            onChange={(e) =>
              setUpdateProduct({
                ...product,
                description: e.target.value,
              })
            }
            className="border p-2"
          />
          <select
            value={product.category}
            onChange={(e) =>
              setUpdateProduct({
                ...product,
                category: e.target.value,
              })
            }
            className="border p-2"
          >
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdateModal;
