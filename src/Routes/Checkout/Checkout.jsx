import React, { useContext } from "react";
import { cartContext } from "../../contextApi/CartContext";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';
import CheckoutItem from "../../Components/checkout-items/CheckoutItems";

function Checkout() {
  const { cartItems, total } =
    useContext(cartContext);
    // let total = 0;
    return (
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>Total: ${total}</Total>
      </CheckoutContainer>
    );
}

export default Checkout;
