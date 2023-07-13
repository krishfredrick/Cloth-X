import {  Outlet } from "react-router-dom";
import { default as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contextApi/contextApi";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../Components/cart-Icon/CartIcon";
import CartDropDown from "../../Components/cart-drop-down/CartDropDown";
import { cartContext } from "../../contextApi/CartContext";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(cartContext)
  // console.log(currentUser);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={CrownLogo} alt={`CrownLogo`} className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavigationBar;
