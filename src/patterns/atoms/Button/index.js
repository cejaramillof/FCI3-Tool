import React from 'react';

// TODO: review btn-outline-secondary importance
const Button = props => {
  return (
    <button className="btn btn-outline-secondary" type="button"{...props}>
      {props.children}
    </button>
  )
}

export default Button;