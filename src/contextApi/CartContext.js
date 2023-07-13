import { createContext, useEffect, useState } from "react";

const add_To_cart = (items, toAdd) => {
  const isAvail = items.find((item) => item.id == toAdd.id);
  if (isAvail)
    return items.map((item) =>
      item.id === toAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );

  return [...items, { ...toAdd, quantity: 1 }];
};

const remove_To_cart = (items, toRemove) => {
  console.log("item", items);
  console.log("remove",toRemove)
  const isAvail = items.find((item) => item.id == toRemove.id);
    console.log("remove-to", isAvail);
  if (isAvail.quantity === 1)
    return items.filter((item) => item.id !== toRemove.id);

  return items.map((item) =>
    item.id === toRemove.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};


const remove_from_cart = (items, toClear)=>{
  return items.filter((item)=> item.id !== toClear.id);
}

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemToCart: () => {},
  clearItemfromCart:()=>{}, 
  total:0
});

export const CartProvider = ({ children }) => {
  // ### States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const tot = cartItems.reduce((tot, item) => (tot + item.quantity), 0);
    // console.log(tot);
    setCartCount(tot);
  }, [cartItems]);
  useEffect(() => {
    const tot = cartItems.reduce((tot, item) => (tot += item.quantity*item.price), 0);
    setTotal(tot);
  }, [cartItems]);

  const addItemToCart = (toAdd) => {
    setCartItems(add_To_cart(cartItems, toAdd));
  };

  const removeItemToCart = (toRemove) => {
    setCartItems(remove_To_cart(cartItems, toRemove));
  };

   const clearItemfromCart = (toclear)=>{
    setCartItems(remove_from_cart(cartItems, toclear))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemToCart,
    clearItemfromCart,
    total
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
