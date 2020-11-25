import styled from 'styled-components/macro'
import {
  colorScheme,
  layoutConfig,
  resetList,
  resetButton,
  resetA11yHidden,
} from 'styles'

/* -------------------------------------------------------------------------- */

const { tablet } = layoutConfig.breakpoints
const { white, gray } = colorScheme

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

export const List = styled.ul`
  ${resetList}
  display: flex;
  flex-flow: row;

  @media (min-width: ${tablet}) {
    flex-flow: column;
  }
`

export const Item = styled.li`
  .indicatorButton {
    ${resetButton}
    position: relative;
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    border-radius: 50%;
    background: ${({ active }) => (active ? white : gray)};
    transition: all 0.4s ease;

    &:hover .tooltip {
      ${resetA11yHidden}
      opacity: 1;
      right: 3rem;
    }
  }

  .tooltip {
    opacity: 0;
    position: absolute;
    top: -0.4rem;
    right: 0;
    width: 7rem;
    text-align: right;
    line-height: 1.45;
    font-size: 1.1rem;
    text-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.65);
    transition: all 0.3s ease;
  }
`
