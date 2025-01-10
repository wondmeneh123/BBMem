import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBookOpen } from "react-icons/fa";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-pink-500 to-rose-400 p-3 flex justify-around items-center shadow-lg">
      {/* Home Button */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center font-bold text-xs sm:text-sm transform hover:scale-110 transition-transform duration-300 ${
            isActive
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-lg"
              : "text-white"
          }`
        }
      >
        <FaHome className="text-xl sm:text-2xl mb-1" />
        <span>Home</span>
      </NavLink>

      {/* Revise Button */}
      <NavLink
        to="/revise"
        className={({ isActive }) =>
          `flex flex-col items-center font-bold text-xs sm:text-sm transform hover:scale-110 transition-transform duration-300 ${
            isActive
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-lg"
              : "text-white"
          }`
        }
      >
        <FaBookOpen className="text-xl sm:text-2xl mb-1" />
        <span>Revise</span>
      </NavLink>
    </div>
  );
};

export default BottomNavigation;
