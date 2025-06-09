import React from "react";
import Navbar from "../components/Navbar";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-4 sm:mx-auto mt-8 sm:mt-24 p-6 sm:p-8 md:p-10 flex flex-col gap-4 items-center border border-gray-200 rounded-lg shadow-sm">
        <FaCheckCircle className="text-5xl sm:text-6xl text-green-600 mb-2" />
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
          Order Confirmed!
        </h3>
        <p className="text-gray-500 text-sm sm:text-base text-center max-w-md">
          Thank you for your purchase. Your order has been successfully placed
          and will be processed shortly.
        </p>

        <div className="flex flex-col items-center mt-2 sm:mt-4">
          <p className="text-gray-500 text-xs sm:text-sm">Order Number</p>
          <h5 className="text-gray-900 text-base sm:text-lg font-bold mt-1">
            #ORD-2025-O5QD6H
          </h5>
        </div>

        <Link
          to="/"
          className="mt-4 sm:mt-6 py-2 sm:py-3 px-6 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          <FiShoppingBag className="text-sm sm:text-base" />
          <span>Continue shopping</span>
        </Link>
      </div>
    </>
  );
};

export default Checkout;
