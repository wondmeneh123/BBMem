import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white text-gray-800 py-3 shadow-md w-full fixed flex justify-center flex-col">
      <Link to="/" className="text-2xl sm:text-3xl font-bold text-center">
        💖 Mi Amor 💖
      </Link>
      <p className="text-center italic mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base">
        "You're the sunshine in my day and the stars in my night." 🌟
      </p>
    </div>
  );
};

export default Header;
