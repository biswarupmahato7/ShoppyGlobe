import React, { useContext, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { ItemsContext } from "../context/ItemContext";
import { NavLink } from "react-router-dom";

const Search = () => {
  const { items } = useContext(ItemsContext);

  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setFilteredItems([]);
      setIsSearchActive(false);
      return;
    }

    if (items && items.products) {
      const searchResult = items.products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(searchResult);
      setIsSearchActive(true);
    } else {
      console.error("Items or products data is missing.");
    }
  };

  const handleClose = () => {
    setQuery("");
    setFilteredItems([]);
    setIsSearchActive(false);
  };

  return (
    <div className="relative w-full">
      <form
        onSubmit={handleSearch}
        className="relative flex items-center w-full max-w-md shadow-lg"
      >
        <input
          type="text"
          placeholder="Search for products, brands, and more..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-500 rounded-l-full text-sm"
        />
        {isSearchActive && (
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-14 text-gray-500 hover:text-red-500 transition duration-200"
          >
            <FaTimes className="text-lg" />
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2.5 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
          <FaSearch className="text-lg" />
        </button>
      </form>

      {/* Render search results */}
      {isSearchActive && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg z-50 max-h-60 overflow-y-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
              <div
                key={product.id}
                className="p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex items-center gap-4"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-medium">{product.title}</p>
                  {/* <p className="text-xs text-gray-500">{product.description}</p> */}
                  <NavLink
                    to={`/item-details/${product.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
              
            ))
          ) : (
            <div className="p-4 text-gray-500 text-sm">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
