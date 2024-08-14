import React from 'react';
import './Text.css';

const Text = ({ children, className = '', as = 'p', ...props }) => {
  const Component = as;

  return (
    <Component className={`custom-text ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Text;
