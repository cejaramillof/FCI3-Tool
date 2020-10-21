import React from 'react';

const Label = ({ htmlFor="", ...props }) => {
    return (
        <label htmlFor={htmlFor}>{props.labelText}</label>
    )
}
  
export default Label;
