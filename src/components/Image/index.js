import React from 'react';
import './Image.css';

const Image = ({ src, alt, className = '', ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`custom-image ${className}`}
      {...props}
    />
  );
};

export default Image;
