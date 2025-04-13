/** @format */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/LogIn/Login";
import ProductTable from "./components/ProductTable/ProductTable";
import PrivateRoute from "./Route/PrivateRoute/PrivateRoute";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductTable />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
