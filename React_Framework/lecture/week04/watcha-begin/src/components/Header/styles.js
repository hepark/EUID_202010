import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { colorScheme } from '../../GlobalStyle'

/* -------------------------------------------------------------------------- */
// 믹스인
const resetA = css`
  user-select: none;
  text-decoration: none;
  color: inherit;
`

/* -------------------------------------------------------------------------- */

export const Container = styled.header`
  /* normal 상태 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.6s ease 0.3s;
  /* fixed 상태 */
  position: fixed;
  z-index: 70;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`

export const Brand = styled.h1`
  margin-top: 0;
`

// React Router의 Link 컴포넌트 확장
export const HomeLink = styled(Link)`
  /* 믹스인(합성) */
  ${resetA}
  display: block;
  padding: 0 0.4rem 0.4rem;
`

// 컬러 스킴 값 추출
const { white, whiteHover, black } = colorScheme

export const SignInLink = styled(Link)`
  /* 믹스인(합성) */
  ${resetA}
  border-radius: 2rem;
  padding: 0.5rem 1.7rem;
  letter-spacing: -0.03em;
  font-size: 1.4rem;
  font-weight: bold;
  background: ${white};
  color: ${black};

  &:hover {
    background: ${whiteHover};
  }
`
