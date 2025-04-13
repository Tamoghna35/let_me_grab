/** @format */

import React, { useState, useEffect } from "react";
import ProductTableHeader from "../ProductTableComponents/ProductTableHeader";
import ProductTableRow from "../ProductTableComponents/ProductTableRow";
import ProductViewModal from "../ProductTableComponents/ProductViewModal";
import ProductUpdateModal from "../ProductTableComponents/ProductUpdateModal";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [limit, setLimit] = useState(5); // State for limit

  const isLoggedIn = localStorage.getItem("users");

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        let productsData;

        if (filterCategory) {
          // Fetch products by category
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${filterCategory}`
          );
          productsData = await response.json();
        } else if (limit) {
          const response = await fetch(
            `https://fakestoreapi.com/products?limit=${limit}`
          );
          productsData = await response.json();
        } else {
          // Fetch all products if no category is selected
          const response = await fetch("https://fakestoreapi.com/products");
          productsData = await response.json();
        }

        const categoryResponse = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const categoriesData = await categoryResponse.json();

        setProducts(productsData); // Update products based on category
        setCategories(categoriesData); // Update categories
      } catch (error) {
        console.error("Failed to fetch products or categories:", error);
      }
    };

    fetchProductsAndCategories();
  }, [filterCategory, limit]); // Trigger when filterCategory changes

  const handleView = async (productId) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const productDetails = await response.json();
      setSelectedProduct(productDetails); // Set the fetched product details
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

  const handleUpdate = (product) => {
    setUpdateProduct(product);
  };

  const handleDelete = async (product) => {
    if (!window.confirm(`Delete ${product.title}?`)) return;

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${product.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setProducts((prev) => prev.filter((p) => p.id !== product.id));
        console.log("Deleted product:", product);
      } else {
        console.error("Delete failed.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${updateProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateProduct),
        }
      );

      if (response.ok) {
        const updated = await response.json();
        setProducts((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
        console.log("Updated product:", updated);
        setUpdateProduct(null);
      } else {
        console.error("Update failed.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleSort = async () => {
    try {
      const newSortOrder = sortOrder === "asc" ? "desc" : "asc"; // Toggle sort order
      const response = await fetch(
        `https://fakestoreapi.com/products?sort=${newSortOrder}`
      );
      const sortedProducts = await response.json();
      setProducts(sortedProducts); // Update the products state with sorted data
      setSortOrder(newSortOrder); // Update sort order state
    } catch (error) {
      console.error("Failed to fetch sorted products:", error);
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory ? product.category === filterCategory : true)
    );
  });

  if (!isLoggedIn) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Table</h1>
      <ProductTableHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        categories={categories}
        limit={limit}
        setLimit={setLimit}
      />
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2" onClick={handleSort}>
              Title{" "}
              {sortOrder === "asc" ? (
                <span>&uarr;</span> // Up arrow for ascending
              ) : (
                <span>&darr;</span> // Down arrow for descending
              )}
            </th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <ProductTableRow
              key={product.id}
              product={product}
              handleView={handleView}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              //   handleSort={handleSort}
            />
          ))}
        </tbody>
      </table>

      {/* View Modal */}
      {selectedProduct && (
        <ProductViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Update Modal */}
      {updateProduct && (
        <ProductUpdateModal
          product={updateProduct}
          setUpdateProduct={setUpdateProduct}
          onClose={() => setUpdateProduct(null)}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </div>
  );
};

export default ProductTable;
