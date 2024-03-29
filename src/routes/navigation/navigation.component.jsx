import React , { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigation.styles';
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  // const signOutHandler= async() =>{
  //   await signOutUser();                             MOVED TO CONTEXT
  //   setCurrentUser(null);
  // }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo"/>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span'  onClick={signOutUser }>SIGN OUT</NavLink>) :
            ( <NavLink to="/auth"> SIGN IN
          </NavLink>)
          }
         <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;