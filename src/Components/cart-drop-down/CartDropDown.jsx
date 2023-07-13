import React, { useContext } from 'react'
// import './cart-dropdown.styles.scss'
import Button from '../button/Button'
import { cartContext } from '../../contextApi/CartContext'
import CartItem from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';


function CartDropDown() {
  const {cartItems} = useContext(cartContext);
  const naviagte = useNavigate();
  const goToCheckOut = ()=>{
    naviagte('/checkout');
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropDown
