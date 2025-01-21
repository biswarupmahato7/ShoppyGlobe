import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoStorefrontOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart/Cart";
import { toggleStatusTab } from "../store/cart";
import Search from "./Search";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg z-50">
        <div className="flex items-center justify-between p-4 h-20">
          {/* Logo Section */}
          <NavLink to="/">
            <div className="text-white text-2xl md:text-3xl font-extrabold cursor-pointer">
              Shoppy Globe
            </div>
          </NavLink>

          {/* Search Bar Section (Hidden on Small Devices) */}
          <div className="hidden md:block">
          <Search />
        </div>

          {/* Hamburger Menu for Small Screens */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 text-white text-lg font-semibold items-center">
            <NavLink
              to="/login"
              className="flex items-center gap-2 cursor-pointer hover:underline transition duration-300"
            >
              <RiAccountCircleFill size={24} />
              Login
            </NavLink>
            <div
              className="relative flex items-center gap-2 cursor-pointer hover:underline transition duration-300"
              onClick={handleOpenTabCart}
            >
              <IoCartOutline size={24} />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                {totalQuantity}
              </span>
              Cart
            </div>
            <NavLink
              to="/seller"
              className="flex items-center gap-2 cursor-pointer hover:underline transition duration-300"
            >
              <IoStorefrontOutline size={24} />
              Become a Seller
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-500 text-white flex flex-col items-center space-y-4 py-4 fixed top-0 left-0 h-full w-64 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end w-full p-4">
          <AiOutlineClose
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-center space-y-6">
          <NavLink
            to="/login"
            className="flex items-center gap-2 cursor-pointer hover:underline transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <RiAccountCircleFill size={24} />
            Account
          </NavLink>
          <div
            className="flex items-center gap-2 cursor-pointer hover:underline transition duration-300"
            onClick={() => {
              handleOpenTabCart();
              setIsMenuOpen(false);
            }}
          >
            <IoCartOutline size={24} />
            Cart
          </div>
          <NavLink
            to="/seller"
            className="flex items-center gap-2 cursor-pointer hover:underline transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoStorefrontOutline size={24} />
            Become a Seller
          </NavLink>
        </ul>
      </div>

      {/* Cart Component */}
      <Cart />
    </div>
  );
};

export default Navbar;
