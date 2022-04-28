import React from 'react'
import {FormInputLabel,Input,Group} from './form-input.styles';

const FormInput = ({label,...otherProps}) => {
  return (
    <Group> 
    <Input {...otherProps}/>
    { label && (
    // <label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>{label}</label>
     <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
     )}
      </Group>
    
  )
}

export default FormInput;