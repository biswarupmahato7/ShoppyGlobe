// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { NavLink } from "react-router-dom";
import { use } from "react";
const Item = ({ id,image, title, price, rating, category,  }) => {
  const [isWishList, setIsWishList] = useState(false);
  const carts = useSelector(store => store.cart.items)
  // console.log(carts)


  const handleWishList = () => {
    setIsWishList((prevState) => !prevState);
  };
  
  //handle add to cart
  const dispatch = useDispatch();
  const handleAddToCart = ()=>{
    dispatch(addToCart({
      productId:id,
      quantity:1,
    }))
    

  }

  return (
    <div className="max-w-sm bg-slate-200 rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <NavLink to={`/item-details/${id}`} key={id}>
      <img
        src={image || "https://via.placeholder.com/150"} // Fallback image
        alt={title}
        className="w-full h-56 object-contain object-top drop-shadow-[0_80px_30px_#0007] transition-transform duration-300 hover:scale-105"
      />

       </NavLink>
     
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 truncate hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mt-2">
          Category: <span className="font-medium capitalize text-blue-500">{category}</span>
        </p>
        <p className="text-gray-700 text-sm mt-1">
          Price: <span className="font-semibold text-green-600">₹{price}</span>
        </p>
        <div className="flex items-center mt-3">
          <span className="text-yellow-500 text-lg mr-1">⭐</span>
          <span className="text-gray-600 text-sm">{rating} / 5</span>
        </div>
        <div className="flex gap-4 mt-5">
          <button
            onClick={handleWishList}
            className={`flex items-center justify-center gap-2 w-1/2 py-2 px-3 font-medium rounded-lg border ${
              isWishList
                ? "bg-red-100 border-red-300 text-red-600 hover:bg-red-200"
                : "bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200"
            } transition-all`}
          >
            <IoHeartOutline className={`${isWishList ? "text-red-600" : ""} text-lg`} />
            {isWishList ? "Added" : "Wishlist"}
          </button>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 w-1/2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            <IoBagOutline className="text-lg" />
            Add to Cart
          </button>
         
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Item;
