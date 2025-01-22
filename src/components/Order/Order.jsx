import React,{useContext} from 'react'
import { useSelector } from 'react-redux'
import { ItemsContext } from '../../context/ItemContext'
import OrderConfirm from './OderConfirm'
//import { FaCaretSquareDown } from 'react-icons/fa'

const Order = () => {
    const carts = useSelector((store)=> store.cart.items);
    const {items} = useContext(ItemsContext)

    console.log("Carts:", carts);
    console.log("Items from Context:", items.products);

    const totalAmount = carts.reduce((acc,item)=>{
        const product = items.products?.find((prod)=> prod.id === item.productId);
        return product ? acc + product.price * item.quantity : acc;
    },0)
    console.log(totalAmount)
  return (
    <div>
    <OrderConfirm
      orderId="12345ABC"
      totalAmount={totalAmount}
      orderDate={new Date().toLocaleDateString()}
    />
    </div>
  )
}

export default Order
