/** @format */

import React from "react";

const ProductTableHeader = ({
  searchTerm,
  setSearchTerm,
  filterCategory,
  setFilterCategory,
  categories = [],
  limit,
  setLimit, // Add limit and setLimit props
}) => {
  return (
    <div className="mb-4 flex gap-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 w-1/2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Dropdown */}
      <select
        className="border p-2"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>

      {/* Limit Dropdown */}
      <select
        className="border p-2 outline-none"
        value={limit}
        onChange={(e) => setLimit(e.target.value)} // Update limit state
      >
        <option value="5">5 Products</option>
        <option value="10">10 Products</option>
        <option value="15">15 Products</option>
        <option value="20">20 Products</option>
      </select>
    </div>
  );
};

export default ProductTableHeader;
