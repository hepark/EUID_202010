import { forwardRef } from 'react';
import classNames from 'classnames'

/**
 * Button 컴포넌트
 * @param {props} props 컴포넌트 props
 * @param {*} ref DOM 노드 참조
 */
const Button = ({ type, label, className, children, ...buttonProps }, ref) => {
  const buttonLabel = label ? label : null

  return (
    <button
      ref={ref}
      {...buttonProps}
      type={type || 'button'}
      className={classNames('button', className)}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      {children}
    </button>
  )
}

export default forwardRef(Button)
