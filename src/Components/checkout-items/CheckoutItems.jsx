import React, { useContext } from "react";
import "./checkout-item.styles.scss";
import { cartContext } from "../../contextApi/CartContext";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemfromCart , addItemToCart, removeItemToCart} = useContext(cartContext);
  // console.log("inside chartContext");
  const addItemhandler = ()=>addItemToCart(cartItem);
  const removeItemhandler = ()=>removeItemToCart(cartItem);
  const clearItemhandler = ()=>clearItemfromCart(cartItem)
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrows" onClick={addItemhandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrows" onClick={removeItemhandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={clearItemhandler}
      >
        &#10060;
      </div>
    </div>
  );
}

export default CheckoutItem;
