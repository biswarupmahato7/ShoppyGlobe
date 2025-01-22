import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import Cart from '../Cart/Cart';


const OrderConfirm = ({ orderId, totalAmount, orderDate }) => {
  const navigate = useNavigate();
  //console.log("Props:", { orderId, totalAmount, orderDate }); // Debugging log

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* Icon */}
        <div className="text-green-500 text-6xl mb-4">
          <IoCheckmarkCircleOutline />
        </div>
       
        <h2 className="text-2xl font-semibold text-gray-800">
          Order Confirmed!
        </h2>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        {/* Order Details */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <p className="text-gray-700 text-sm">
            {/* <span className="font-medium">Order ID:</span> {orderId || 'N/A'} */}
            <span className="font-medium">Order ID:</span> {'ABC4521'}
          </p>
          <p className="text-gray-700 text-sm mt-2">
            <span className="font-medium">Order Date:</span>{' '}
            {orderDate || new Date().toLocaleDateString()}
          </p>
          {/* <p className="text-gray-700 text-sm mt-2">
            <span className="font-medium">Total Amount:</span> ₹
            {totalAmount?.toFixed(2) || '0.00'}
          </p> */}
        </div>
        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate('/orders')}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
