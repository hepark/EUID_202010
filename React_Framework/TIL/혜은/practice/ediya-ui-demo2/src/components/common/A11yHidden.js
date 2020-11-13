import React, { forwardRef } from 'react';
import { a11yHidden } from 'styles/modules/common.module.css';
import classNames from 'classnames';

const A11yHidden = ({ as: Tag, children, className, ...domProps }, ref) => {
  // as 속성이 전달되지 않은 경우 <span/>으로 초기 설정
  // forwardRef는 defaultProps, propTypes를 지원하지 않기 때문
  Tag = Tag || 'span';

  return (
    <Tag {...domProps} className={classNames(a11yHidden, className)} ref={ref}>
      {children}
    </Tag>
  );
};

// Warning: forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?
// A11yHidden.defaultProps = {
//   as: 'span',
// }

export default forwardRef(A11yHidden);
