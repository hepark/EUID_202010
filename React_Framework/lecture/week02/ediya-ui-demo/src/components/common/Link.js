import React, { forwardRef } from 'react';

const Link = ({ to, children, external, label, ...props }, ref) => {
  const labelValue = label ? label : null;
  to = to || '/';

  return (
    <a
      {...props}
      ref={ref}
      href={to}
      title={labelValue}
      aria-label={labelValue}
      rel={external ? 'noopener noreferrer' : null}
      target={external ? '_blank' : null}
    >
      {children}
    </a>
  );
};

export default forwardRef(Link);
