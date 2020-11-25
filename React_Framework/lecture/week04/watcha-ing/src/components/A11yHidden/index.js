import classNames from 'classnames'
import { string, bool, any } from 'prop-types'

import ReadableHidden from './styles'

/* -------------------------------------------------------------------------- */

const A11yHidden = ({
  as,
  children,
  className,
  visible = true,
  ...restProps
}) => {
  const Comp = as || 'span'

  return visible ? (
    <ReadableHidden
      {...restProps}
      as={Comp}
      className={classNames('a11yHidden', className)}
    >
      {children}
    </ReadableHidden>
  ) : (
    <Comp {...restProps} className={classNames(className)}>
      {children}
    </Comp>
  )
}

A11yHidden.propTypes = {
  as: string,
  className: string,
  visible: bool,
  children: any,
}

export default A11yHidden
