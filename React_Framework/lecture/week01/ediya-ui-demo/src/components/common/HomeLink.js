import React from 'react';

const HomeLink = ({ children, to, ...props }) => (
  <h1 className="brand" {...props}>
    <a href={to}>{children}</a>
  </h1>
);

HomeLink.defaultProps = {
  to: '/',
};

export default HomeLink;
