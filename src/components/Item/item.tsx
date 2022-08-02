import  Button  from "@material-ui/core/Button";
//types
import { CartItemType } from "../../App";
//styles
import { ItemStyles } from "./item.style";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType)=>void;
}


const handleClick =({item,handleAddToCart})=>{
    handleAddToCart(item);
}
const Item: React.FC<Props> =({item,handleAddToCart})=>(
    <ItemStyles>
        <img src={item.image} alt={item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>KSH {item.price}</h3>
        </div> 
        <Button onClick={(e)=>handleAddToCart(item)}>Add To cart</Button>
    </ItemStyles>
)

export default Item