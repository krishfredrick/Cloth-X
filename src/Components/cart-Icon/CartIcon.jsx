import React, { useContext } from 'react'
import {default as ShopingIcon} from '../../assets/shopping-bag.svg'
import { cartContext } from '../../contextApi/CartContext'
import { CartIconContainer, ItemCount } from './cart-icon.styles';

export default function CartIcon() {
  const {isCartOpen,setIsCartOpen, cartCount} = useContext(cartContext);
  // console.log(cartCount);
  // console.log(isCartOpen);
  const toggleCart = ()=>setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCart}>
      <img className='shopping-icon' src={ShopingIcon}/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
  
}


/**
 * return (
    <div className= 'cart-icon-container' onClick={toggleCart}>
      <img className='shopping-icon' src={ShopingIcon} alt='ShopingIcon'/>
      <span className="item-count">{cartCount}</span>
    </div>
  )
 */