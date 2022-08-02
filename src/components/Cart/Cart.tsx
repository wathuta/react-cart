import React from 'react'
//styles
import { CartStyles } from './Cart.style'
//types
import { CartItemType } from '../../App';
import CartItem from '../CartItem/CartItem'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItme: CartItemType)=>void;
    removeFromCart: (id :number)=>void;
}

const Cart: React.FC<Props>=({cartItems,addToCart,removeFromCart})=> {
  const calculateTotal = (items:CartItemType[])=>
    items.reduce((ack:number,item)=>ack+item.amount*item.price,0);
  
    return (
    <CartStyles>
        <h2>Your Shopping Cart</h2>
        {cartItems.length===0? <p>No items in the Cart.</p>:null}
        {cartItems.map(item=>(
            <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart= {removeFromCart}
            />
        ))}
        <h2>Total: KSH{calculateTotal(cartItems).toFixed(2)}</h2>
    </CartStyles>
  )
}

export default Cart