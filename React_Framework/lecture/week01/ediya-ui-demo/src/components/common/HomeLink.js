import React from 'react';
import { string } from 'prop-types';
import brandSrc from 'assets/images/brand.svg';

const HomeLink = ({ alt, imageClass, ...wrapperProps }) => {
  return (
    <h1 className="brand" {...wrapperProps}>
      <a href="/">
        <img src={brandSrc} alt={alt} className={imageClass} />
      </a>
    </h1>
  );
};

HomeLink.defaultProps = {
  imageClass: 'respons',
};

HomeLink.propTypes = {
  alt: string.isRequired,
  imageClass: string,
};

export default HomeLink;
