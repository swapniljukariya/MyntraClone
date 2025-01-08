import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUserCircle, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import logo from "./img/logo.png";

function Header({ setSearch }) {
  return (
    <div className="flex items-center px-6 shadow-lg bg-white fixed top-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center ml-6">
        <img src={logo} alt="logo" className="w-28 h-16 cursor-pointer" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-9 text-md ml-32 font-semibold text-gray-800">
        <NavLink
          to="/men"
          className={({ isActive }) =>
            isActive ? "text-pink-600" : "hover:text-pink-600"
          }
        >
          MEN
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) =>
            isActive ? "text-pink-600" : "hover:text-pink-600"
          }
        >
          WOMEN
        </NavLink>
        <NavLink
          to="/kids"
          className={({ isActive }) =>
            isActive ? "text-pink-600" : "hover:text-pink-600"
          }
        >
          KIDS
        </NavLink>
        <NavLink
          to="/home-living"
          className={({ isActive }) =>
            isActive ? "text-pink-600" : "hover:text-pink-600"
          }
        >
          HOME & LIVING
        </NavLink>
        <NavLink
          to="/beauty"
          className={({ isActive }) =>
            isActive ? "text-pink-600" : "hover:text-pink-600"
          }
        >
          BEAUTY
        </NavLink>
        <NavLink
          to="/studio"
          className={({ isActive }) =>
            isActive ? "text-pink-600" : "hover:text-pink-600"
          }
        >
          STUDIO
        </NavLink>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-md w-96 h-10 ml-auto">
        <FaSearch className="text-gray-500 ml-3" />
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products"
          className="bg-gray-100 text-gray-800 outline-none ml-3 text-sm"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-7 ml-8 text-gray-800">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-pink-600" : "hover:text-pink-600"
          }
        >
          <div className="flex flex-col items-center text-xs">
            <FaUserCircle size={30} className="text-2xl" />
            <span>Profile</span>
          </div>
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "text-pink-600" : "hover:text-pink-600"
          }
        >
          <div className="flex flex-col items-center text-xs">
            <FaRegHeart size={30} className="text-2xl" />
            <span>Wishlist</span>
          </div>
        </NavLink>
        <NavLink
          to="/bag"
          className={({ isActive }) =>
            isActive ? "text-pink-600" : "hover:text-pink-600"
          }
        >
          <div className="flex flex-col items-center text-xs">
            <FaShoppingBag size={30} className="text-2xl" />
            <span>Bag</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
