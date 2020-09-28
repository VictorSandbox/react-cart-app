import React, {useContext, useState} from "react"
import { AppContext } from "../appContext"


function CartItem({item}) {
  const { removeFromCart } = useContext(AppContext);
  // https://upmostly.com/tutorials/react-onhover-event-handling-with-examples
  const [isHovered, setIsHovered] = useState(false);

  const iconClassName = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (    
        <div className="cart-item">
            <i className={iconClassName}  
            onMouseEnter={() => setIsHovered(true)}   
            onMouseLeave={() => setIsHovered(false)} 
            onClick={()=>removeFromCart(item)} ></i>
            <img src={item.url} width="130px" alt="Cart" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem