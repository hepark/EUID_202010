// import { forwardRef } from 'react'
// import { any, string } from 'prop-types'
import styled from 'styled-components/macro'
import { resetButton } from 'styles'

/* -------------------------------------------------------------------------- */

const Button = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  ${resetButton}
`
export default Button
