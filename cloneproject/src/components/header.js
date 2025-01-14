import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaUserCircle, FaRegHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import logo from "./img/logo.png";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { updateQuery } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchValue(query);
    updateQuery(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      navigate("/filtered-results");
    }
  };

  return (
    <div className="flex items-center px-4 py-2 shadow-lg bg-white fixed top-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-20 h-10 cursor-pointer" />
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden ml-auto">
        {isMenuOpen ? (
          <FaTimes
            className="text-2xl text-gray-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="text-2xl text-gray-800 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-white md:static md:flex md:items-center md:space-x-8 md:block text-sm font-semibold text-gray-800`}
      >
        {["men", "women", "kids", "home-living", "beauty", "studio"].map((item) => (
          <NavLink
            key={item}
            to={`/${item}`}
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 block px-4 py-2 md:inline hover:text-pink-600"
                : "block px-4 py-2 md:inline hover:text-pink-600"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {item.toUpperCase().replace("-", " & ")}
          </NavLink>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-full md:w-96 ml-8 lg:w-96 h-10 bg-gray-100 border border-gray-200 rounded-md ml-auto md:ml-6">
        <div className="flex items-center w-full">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 outline-none ml-3 text-sm md:text-base w-full placeholder:text-sm"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-3 md:space-x-6 ml-4 text-gray-800">
        {[
          { to: "/profile", icon: <FaUserCircle size={20} />, label: "Profile" },
          { to: "/wishlist", icon: <FaRegHeart size={20} />, label: "Wishlist" },
          { to: "/bag", icon: <FaShoppingBag size={20} />, label: "Bag" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? "text-pink-600" : "hover:text-pink-600"
            }
          >
            <div className="flex flex-col items-center text-xs">
              {icon}
              <span className="hidden md:block">{label}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
