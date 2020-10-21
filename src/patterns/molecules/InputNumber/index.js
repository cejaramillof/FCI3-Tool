import React from 'react';
import Input from 'patterns/atoms/Input';
import Label from 'patterns/atoms/Label';

const InputNumber = props => {

  const getInputProps = ({ id }) => {
    return {
      className: 'form-control',
      id,
      htmlFor: id,
      type: 'number',
    };
  }

  const getLabelProps = ({htmlFor, labelText}) => {
    return {
      htmlFor,
      labelText,
    };
  }

  return (
    <>
      <Label {...getLabelProps(props)} />
      <Input {...getInputProps(props)} />
    </>
  )
}

export default InputNumber;
