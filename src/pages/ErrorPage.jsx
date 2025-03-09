import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
      <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-3xl text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={handleGoBack}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;