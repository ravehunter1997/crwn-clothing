import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-items.component";
import {CartDropdownContainer,EmptyMessage,CartItems} from "./cart-dropdown.styles.jsx";
import React,{ useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.checkout}
        onClick={goToCheckoutHandler}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
