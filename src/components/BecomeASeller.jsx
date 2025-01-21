import React from 'react';
import { NavLink } from 'react-router-dom';

const BecomeASeller = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Become a Seller on Shoppy Globe
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join our platform and start selling your products to millions of customers.
          It's simple, fast, and easy to get started.
        </p>

        <div className="flex justify-center gap-8">
          <NavLink
            to="/seller-registration"
            className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-800 py-3 px-8 rounded-full text-xl font-semibold transition duration-300"
          >
            Start Selling Now
          </NavLink>
          <NavLink
            to="/learn-more"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 py-3 px-8 rounded-full text-xl font-semibold transition duration-300"
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BecomeASeller;
