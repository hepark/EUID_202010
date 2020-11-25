import classNames from 'classnames'
import { string, arrayOf, element } from 'prop-types'
import { Container, Brand, HomeLink, SignInLink } from './styles'

/* -------------------------------------------------------------------------- */

export default function Header({ children, className, ...resetProps }) {
  // Container 컴포넌트 - 스타일 컴포넌트(스타일링이 되어 있는 컴포넌트)
  return (
    <Container {...resetProps} className={classNames('container', className)}>
      {children}
    </Container>
  )
}

Header.propTypes = {
  children: arrayOf(element),
  className: string,
}

/* -------------------------------------------------------------------------- */

Header.Brand = function HeaderBrand({ className, children, ...restProps }) {
  // Brand 컴포넌트 - 스타일 컴포넌트
  return (
    <Brand {...restProps} className={classNames('watcha__brand', className)}>
      {children}
    </Brand>
  )
}

Header.Brand.propTypes = {
  className: string,
  children: element,
}

/* -------------------------------------------------------------------------- */

Header.HomeLink = function HeaderHomeLink({
  children,
  className,
  ...restProps
}) {
  return (
    <HomeLink {...restProps} className={classNames('resetA', className)}>
      {children}
    </HomeLink>
  )
}

Header.HomeLink.propTypes = {
  children: element,
  className: string,
}

/* -------------------------------------------------------------------------- */

Header.SignInLink = function HeaderSignInLink({
  children,
  className,
  ...restProps
}) {
  return (
    <SignInLink {...restProps} className={classNames('resetA', className)}>
      {children}
    </SignInLink>
  )
}

Header.SignInLink.propTypes = {
  children: string,
  className: string,
}
