import { useState, useEffect, useRef, useCallback } from 'react'
import classNames from 'classnames'
import { any, number, string, shape, oneOfType } from 'prop-types'

import { Section, Headline, Description, Link, Button } from './styles'

/* -------------------------------------------------------------------------- */

export default function Main({ children, className, ...restProps }) {
  return (
    <main {...restProps} className={classNames(className)}>
      {children}
    </main>
  )
}

Main.propTypes = {
  className: string,
  children: any,
}

/* -------------------------------------------------------------------------- */

Main.Section = function MainSection({
  wallpaper,
  active,
  opacity = 0,
  transitionTime = 1000,
  className,
  children,
  ...restProps
}) {
  // 참조
  const sectionRef = useRef(null)
  // 상태
  const [transparent, setTransparent] = useState(opacity)

  // 사이드 이펙트
  useEffect(() => {
    window.setTimeout(() => setTransparent(1)), transitionTime
  }, [])

  useEffect(() => {
    const { current: sectionNode } = sectionRef
    active && sectionNode.scrollIntoView({ behavior: 'smooth' })
  }, [active])

  return (
    <Section
      ref={sectionRef}
      {...restProps}
      wallpaper={wallpaper}
      opacity={transparent}
      className={classNames(className)}
    >
      {children}
    </Section>
  )
}

Main.Section.propTypes = {
  wallpaper: shape({ id: string, url: string }),
  opacity: number,
  transitionTime: number,
  className: string,
  children: any,
}

/* -------------------------------------------------------------------------- */

Main.Headline = function MainHeadline({ children, className, ...restProps }) {
  return (
    <Headline {...restProps} className={classNames(className)}>
      {children}
    </Headline>
  )
}

Main.Headline.propTypes = {
  className: string,
  children: any,
}

/* -------------------------------------------------------------------------- */

Main.Description = function MainDescription({
  children,
  className,
  ...restProps
}) {
  return (
    <Description {...restProps} className={classNames(className)}>
      {children}
    </Description>
  )
}

Main.Description.propTypes = {
  className: string,
  children: any,
}

/* -------------------------------------------------------------------------- */

Main.Link = function MainLink({ children, className, ...restProps }) {
  return (
    <Link {...restProps} className={classNames('resetA', className)}>
      {children}
    </Link>
  )
}

Main.Link.propTypes = {
  className: string,
  children: any,
}

/* -------------------------------------------------------------------------- */

Main.GoToSectionButton = function MainGoToSectionButton({
  gotoFirst,
  children,
  className,
  ...restProps
}) {
  return (
    <Button
      // 버튼 유형을 기본으로 사용
      type="button"
      {...restProps}
      className={classNames(
        'resetButton',
        gotoFirst ? 'is--first' : null,
        className
      )}
    >
      {children}
    </Button>
  )
}

Main.GoToSectionButton.propTypes = {
  className: string,
  children: any,
  // 여러 유형 중 하나(oneOfType)를 지정할 경우 null 설정 방법
  // oneOfType 체크 함수에서 null을 반환하도록 설정
  // 참고: https://bit.ly/2UMR9EM
  gotoFirst: oneOfType([string, () => null]),
}
