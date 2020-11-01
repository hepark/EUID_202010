import React from 'react';

const Button = ({ type, label, children, className, ...buttonProps }) => {
  const buttonLabel = label ? label : null;
  let buttonClassNames = 'button';
  if (className) {
    buttonClassNames += ` ${className}`;
  }
  return (
    <button
      {...buttonProps}
      type={type || 'button'}
      className={buttonClassNames}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      {children}
    </button>
  );
};

export default Button;
