// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { ItemsContext } from '../../context/ItemContext';
import { useParams } from 'react-router-dom';
import {IoHeartOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';

const ItemDetails = () => {
  const { items, loading, error } = useContext(ItemsContext);
  const { id } = useParams();
  const [quantity,setQuantity] = useState(1) //quantity
  const [isWishList, setIsWishList] = useState(false); //wishlist
  const dispatch = useDispatch();
  const handelPlus = ()=>{
    setQuantity(quantity+1);
    
  }

  const handelMinus = ()=>{
    if(quantity === 1) return;
    setQuantity(quantity-1);
    
  }
  const handelAddToCart = ()=>{
    dispatch(addToCart({
      productId: id,
      quantity:quantity
    }))

  }
 //wishlist
  const handleWishList = () => {
    setIsWishList((prevState) => !prevState);
  };

  const SingleItem = items.products?.find(item => item.id === Number(id));

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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 p-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-5xl w-full flex flex-col md:flex-row">
        {/* Left Section: Image */}
        <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={SingleItem.images?.[0]}
            alt={SingleItem.title}
            className="w-full h-80 object-contain rounded-md shadow-md"
          />
        </div>

        {/* Right Section: Details */}
        <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
          {/* Product Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{SingleItem.title}</h2>

          {/* Description */}
          <p className="text-gray-600 text-justify mb-4 text-lg">{SingleItem.description}</p>

          {/* Price, Discount, Brand */}
          <div className="flex flex-wrap justify-between items-center mb-4">
            <p className="text-xl font-semibold text-gray-800">
              Price: <span className="text-blue-600 text-2xl">${SingleItem.price}</span>
            </p>
            <p className="text-lg font-medium text-gray-600">
              Discount: <span className="text-green-600">{SingleItem.discountPercentage}%</span>
            </p>
          </div>
          <p className="text-md font-medium text-gray-600 mb-2">Brand: {SingleItem.brand}</p>
          <p className="text-md font-medium text-gray-600 mb-4">Rating: ⭐ {SingleItem.rating}</p>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
           
             <button
                        onClick={handleWishList}
                        className={`flex items-center justify-center gap-2 w-28 py-2 px-3 font-medium rounded-lg border ${
                          isWishList
                            ? "bg-red-100 border-red-300 text-red-600 hover:bg-red-200"
                            : "bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200"
                        } transition-all`}
                      >
                        <IoHeartOutline className={`${isWishList ? "text-red-600" : ""} text-lg`} />
                        {isWishList ? "Added" : ""}
                      </button>

            {/* manage quantity */}
            <div className="flex items-center space-x-4">
              <button onClick={handelPlus}
              className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition">
                +
              </button>
              <span className="text-lg font-bold text-gray-700">{quantity}</span>
              <button onClick={handelMinus}
              className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition">
                -
              </button>
              <button onClick={handelAddToCart}
              className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h3>
            {SingleItem.reviews && SingleItem.reviews.length > 0 ? (
              <ul className="space-y-4">
                {SingleItem.reviews.map((review, index) => (
                  <li
                    key={index}
                    className="p-4 border border-gray-300 rounded-md bg-gray-50 shadow-sm"
                  >
                    <p className="text-sm text-gray-600">
                      <strong>{review.reviewerName}</strong> on{' '}
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-500">Rating: ⭐ {review.rating}</p>
                    <p className="text-gray-700 mt-2">{review.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No reviews available for this product.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
