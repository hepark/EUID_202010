import classNames from 'classnames'
import { string, any, bool } from 'prop-types'

import { Container, Brand, HomeLink, SignInLink } from './styles'

/* -------------------------------------------------------------------------- */

export default function Header({ children, className, ...restProps }) {
  return (
    <Container {...restProps} className={classNames('container', className)}>
      {children}
    </Container>
  )
}

Header.propTypes = {
  children: any,
  className: string,
}

/* -------------------------------------------------------------------------- */

Header.Brand = function HeaderBrand({ children, className, ...restProps }) {
  return (
    <Brand>
      <HomeLink
        {...restProps}
        className={classNames('resetA', className)}
        href="/"
      >
        {children}
      </HomeLink>
    </Brand>
  )
}

Header.Brand.propTypes = {
  children: any,
  className: string,
}

/* -------------------------------------------------------------------------- */

Header.SignInLink = function HeaderSignInLink({
  children,
  className,
  external,
  ...restProps
}) {
  return (
    <SignInLink
      {...restProps}
      className={classNames('resetA', className)}
      target={external ? '_blank' : null}
      rel={external ? 'noopener noreffer' : null}
    >
      {children}
    </SignInLink>
  )
}

Header.SignInLink.propTypes = {
  children: any,
  className: string,
  external: bool,
}
