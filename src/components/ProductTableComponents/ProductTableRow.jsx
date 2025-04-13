/** @format */

import React from "react";

const ProductTableRow = ({
  product,
  handleView,
  handleUpdate,
  handleDelete,
  //   handleSort,
}) => {
  return (
    <tr key={product.id} className="hover:bg-gray-100">
      <td className="border px-4 py-2">{product.title}</td>
      <td className="border px-4 py-2">${product.price}</td>
      <td className="border px-4 py-2 truncate max-w-xs">
        {product.description}
      </td>
      <td className="border px-4 py-2">{product.category}</td>
      <td className="border px-4 py-2 flex gap-2">
        <button
          onClick={() => handleView(product.id)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          View
        </button>
        <button
          onClick={() => handleUpdate(product)}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(product)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
