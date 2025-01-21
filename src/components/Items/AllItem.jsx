// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import { ItemsContext } from '../../context/ItemContext';
import { NavLink } from 'react-router-dom';

const AllItem = () => {
  const { items, loading, error } = useContext(ItemsContext);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-blue-300">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-100"></div>
          <div className="w-4 h-4 bg-blue-700 rounded-full animate-bounce delay-200"></div>
        </div>
        <p className="mt-4 text-blue-900 font-semibold text-lg">
          Fetching your items, hang tight!
        </p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <section className="mt-2 p-4 bg-gray-300">
      <h2 className="text-center text-2xl font-bold mb-6">All Items</h2>
      <div className="item-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.products.map((item) => (
          
          
            <Item
              key = {item.id}
              id={item.id}
              image={item.images?.[0]}
              title={item.title}
              price={`₹${item.price}`}
              rating={item.rating}
              category={item.category}
            />
         
        ))}
      </div>
    </section>
  );
};

export default AllItem;
