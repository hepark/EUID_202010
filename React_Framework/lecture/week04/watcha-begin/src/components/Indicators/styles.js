import styled from 'styled-components/macro'
import { layoutConfig } from 'styles'

/* -------------------------------------------------------------------------- */

const { tablet } = layoutConfig.breakpoints

/* -------------------------------------------------------------------------- */

export const Container = styled.nav`
  position: fixed;
  z-index: 80;
  top: 16vh;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: ${tablet}) {
    top: 50%;
    right: 3rem;
    left: initial;
    transform: translateY(-50%);
  }
`

export const List = styled.ul``

export const Item = styled.li``
