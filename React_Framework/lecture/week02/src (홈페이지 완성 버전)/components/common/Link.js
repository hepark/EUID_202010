import { forwardRef } from 'react';

/**
 * Link 컴포넌트
 * @param {props} props 컴포넌트 props
 * @param {ref} ref DOM 노드 참조
 */
const Link = (
  { children, external, to, isHomelink, homelinkProps, ...linkProps },
  ref
) => {
  // 기본 값 설정
  to = to || '/'
  external = external || false

  return isHomelink ? (
    <h1 {...homelinkProps}>
      <a
        {...linkProps}
        ref={ref}
        href={to}
        target={external ? '_blank' : null}
        rel={external ? 'noopener noreferrer' : null}
      >
        {children}
      </a>
    </h1>
  ) : (
    <a {...linkProps} href={to} ref={ref}>
      {children}
    </a>
  )
}

export default forwardRef(Link)
