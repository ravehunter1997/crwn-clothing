import { CartIconContainer, ShoppingIcon, Itemcount } from "./cart-icon.styles";
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <Itemcount>{cartCount}</Itemcount>
    </CartIconContainer>
  );
};

export default CartIcon;
