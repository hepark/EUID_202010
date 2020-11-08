import React, { forwardRef } from 'react';
import classNames from 'classnames';

/* -------------------------------------------------------------------------- */

const A11yHidden = ({ as: Tag, className, children, ...props }, ref) => {
  Tag = Tag || 'span';

  return (
    <Tag {...props} ref={ref} className={classNames('a11y-hidden', className)}>
      {children}
    </Tag>
  );
};

export default forwardRef(A11yHidden);
