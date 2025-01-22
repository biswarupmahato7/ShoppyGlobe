import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../../store/cart';
import { ItemsContext } from '../../context/ItemContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { items } = useContext(ItemsContext);
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleStatusTab()); // Dispatch the action to close the cart
  };

  // Calculate Total Price
  const totalPrice = carts.reduce((total, cartItem) => {
    const product = items.products?.find((item) => item.id === cartItem.productId);
    const price = product?.price || 0;
    return total + price * cartItem.quantity;
  }, 0);

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-50 shadow-2xl w-full md:w-96 h-full grid grid-rows-[60px_1fr_100px] transform 
      ${statusTab === false ? 'translate-x-full' : ''}
      z-50 transition-transform duration-300 border-l`}
    >
      {/* Cart Header */}
      <div className="p-5 bg-gray-800 text-white flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button
          onClick={handleClose}
          className="text-sm font-semibold bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-5 overflow-y-auto space-y-4">
        {carts.length > 0 ? (
          carts.map((item, key) => <CartItem key={key} data={item} />)
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>

      {/* Cart Footer */}
      <div className="p-5 bg-white border-t flex flex-col gap-4">
        {/* Total Price */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold text-green-600">${totalPrice.toFixed(2)}</span>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition"
            onClick={handleClose}
          >
            Close
          </button>
          <NavLink to="/orderConfirm">
            <button className="bg-green-500 text-white py-3 px-1 rounded hover:bg-green-600 transition">
              Checkout
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
