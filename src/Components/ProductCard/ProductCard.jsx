import React, { useContext } from 'react'
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles.js'
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button';
import { cartContext } from '../../contextApi/CartContext';
function ProductCard({product}) {

  const{addItemToCart} = useContext(cartContext);
  const {imageUrl, name, price} = product;
  
  const addProductToCart = ()=>addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
}

export default ProductCard
