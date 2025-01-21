import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../../store/cart';

const Cart = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleStatusTab()); // Dispatch the action to close the cart
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-500 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform 
      ${statusTab === false ? 'translate-x-full' : ''}
      z-50 transition-transform duration-300`}
    >
      <h2 className="p-5 text-white text-2xl">Your Cart</h2>
      <div className="p-5 overflow-y-auto">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button
          className="bg-black text-white"
          onClick={handleClose} // Attach the handler here
        >
          Close
        </button>
        <button className="bg-green-500 text-white">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
