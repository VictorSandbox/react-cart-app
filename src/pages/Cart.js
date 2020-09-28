import React, { useContext, useState } from "react";
import { AppContext } from "../appContext";
import CartItem from "../components/CartItems";

function Cart() {
  const { cartItem, emptyCart } = useContext(AppContext);

  const [buttonText, setButtonText] = useState("Place Order")

  const cartItemElements = cartItem.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const totalCost = cartItem.length * 5.99;
  const totalDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function processOrder() {

        setButtonText("Ordering ...")
        setTimeout(() => {
          console.log("Order placed");
          setButtonText('Order Placed')
          emptyCart()
        }, 3000);
      } 
  

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total:{totalDisplay} </p>

      {
         (cartItem.length > 0) ?
         <div className="order-button">
         <button onClick={processOrder}>{buttonText}</button>
       </div> :
       <p>You have no items in your cart.</p>
      }


    </main>
  );
}

export default Cart;
