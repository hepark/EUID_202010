import { array, func, arrayOf, element } from 'prop-types'
import { Container, List, Item } from './styles'

/* -------------------------------------------------------------------------- */

export default function Indicators({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Indicators.propTypes = {
  children: arrayOf(element),
}

/* -------------------------------------------------------------------------- */

Indicators.List = function IndicatorsList({ list, render, ...restProps }) {
  return (
    <List {...restProps}>{list.map((item, index) => render(item, index))}</List>
  )
}

Indicators.List.propTypes = {
  list: array,
  render: func,
}

/* -------------------------------------------------------------------------- */

Indicators.Item = function IndicatorsItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Indicators.Item.propTypes = {
  children: element,
}
