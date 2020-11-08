import React, { forwardRef } from 'react';

const Button = ({ type, label, children, className, ...buttonProps }, ref) => {
  const buttonLabel = label ? label : null;
  let buttonClassNames = 'button';
  if (className) {
    buttonClassNames += ` ${className}`;
  }
  return (
    <button
      ref={ref}
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

export default forwardRef(Button);
