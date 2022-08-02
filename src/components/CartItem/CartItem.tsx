import React from 'react'
//styles
import { CartItemStyle } from './CartItem.style'
//button
import Button from "@material-ui/core/Button"
//types
import { CartItemType } from '../../App';

type Props={
    item:CartItemType;
    addToCart: (clickedItme: CartItemType)=>void
    removeFromCart: (id :number)=>void;
}

const CartItem: React.FC<Props> = ({item,addToCart,removeFromCart}) =>  (
<CartItemStyle>
    <div>
        <h3>{item.title}</h3>
        <div className="information">
            <p>Price: KSH{item.price}</p>
            <p> Total KSH{(item.amount*item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
            <Button
            size='small'
            disableElevation
            variant="contained"
            onClick={()=>removeFromCart(item.id)}
            >
                -
            </Button>
            <p>
                {item.amount}
            </p>
            <Button
            size='small'
            disableElevation
            variant="contained"
            onClick={()=>addToCart(item)}
            >
                +
            </Button>
        </div>
    </div>
    <img src={item.image} alt={item.title}/>
</CartItemStyle>
)




export default CartItem