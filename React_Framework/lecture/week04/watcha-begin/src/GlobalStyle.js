import { createGlobalStyle } from 'styled-components'

/* -------------------------------------------------------------------------- */

export const colorScheme = {
  black: '#141517',
  white: '#fcfcff',
  accent: '#F82F62',
  accentHover: '#c7254d',
}

/* -------------------------------------------------------------------------- */

const { black, white } = colorScheme

export default createGlobalStyle`
  body {
    background: ${black};
    color: ${white};
  }
`
