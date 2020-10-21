import React from 'react';

const Image = ({ image, alt, classValue ='wrapper-logo--image' }) => {
  return (
    <img
      className={classValue}
      src={image}
      alt={alt}
      />
  )
}

export default Image;
