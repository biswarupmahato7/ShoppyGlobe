import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ItemsContext } from '../../context/ItemContext';
import { changeQuantity } from '../../store/cart';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const { items } = useContext(ItemsContext); // Assuming `ItemsContext` provides all items.
    const [productDetails, setProductDetails] = useState(null);
    const dispatch = useDispatch();


    
    useEffect(() => {
        // Fetch product details based on productId from the context
        const product = items.products?.find(item => item.id === productId);
        setProductDetails(product);
    }, [productId, items.products]);

    const handelMinus = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    };

    const handelPlus = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    };

    if (!productDetails) {
        return (
            <div className="p-4 text-gray-600 text-center">
                Loading product details...
            </div>
        );
    }

    return (
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
            {/* Product Image */}
            <div className="flex items-center space-x-4">
                <img
                    src={productDetails.images?.[0]}
                    alt={productDetails.title}
                    className="w-20 h-20 object-contain rounded-md"
                />
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{productDetails.title}</h3>
                    <p className="text-sm text-gray-600">{productDetails.category}</p>
                    <p className="text-sm text-blue-600">Price: ${productDetails.price}</p>
                </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={handelMinus}
                    className="bg-red-500 text-white py-1 px-3 rounded-md shadow-md hover:bg-red-600 transition"
                >
                    -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                    onClick={handelPlus}
                    className="bg-green-500 text-white py-1 px-3 rounded-md shadow-md hover:bg-green-600 transition"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;
