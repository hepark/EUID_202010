import React from 'react'
import { arrayOf, element } from 'prop-types'
import { Container } from './styles'

/* -------------------------------------------------------------------------- */

export default function Indicators({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Indicators.propTypes = {
  children: arrayOf(element),
}

/* -------------------------------------------------------------------------- */
// Indicators.List

/* -------------------------------------------------------------------------- */
// Indicators.Item
