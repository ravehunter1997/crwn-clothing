import React from 'react';
import {BaseButton,GoogleSignInButton, InvertedButton, CheckoutButton} from './button.styles'


export const BUTTON_TYPES_CLASSES = {
    base : 'base',  
    google : 'google-sign-in',
    inverted : 'inverted',
    checkout: 'checkout'

}

const getButton = (buttonType=BUTTON_TYPES_CLASSES.base)=> (
{
  [BUTTON_TYPES_CLASSES.base] : BaseButton,
  [BUTTON_TYPES_CLASSES.google] : GoogleSignInButton,
  [BUTTON_TYPES_CLASSES.inverted] : InvertedButton,
  [BUTTON_TYPES_CLASSES.checkout] : CheckoutButton

}[buttonType]
)

const Button = ({children,buttonType,...otherProps}) => {
  const CustomButton = getButton(buttonType);
  return (
     <CustomButton {...otherProps}> 
         {children}</CustomButton>  
  )
}

export default Button