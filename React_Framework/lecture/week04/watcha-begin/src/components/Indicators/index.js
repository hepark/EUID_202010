import { createContext, useContext } from 'react'
import { bool, number, array, func, arrayOf, element } from 'prop-types'
import { Container, List, Item } from './styles'

// 인디케이터 컴포넌트 사이에 데이터를 공유하기 위한 콘텍스트
const Context = createContext()

/* -------------------------------------------------------------------------- */

export default function Indicators({
  children,
  activeIndex,
  onChangeActiveIndex,
  ...restProps
}) {
  return (
    <Context.Provider value={{ activeIndex, onChangeActiveIndex }}>
      <Container {...restProps}>{children}</Container>
    </Context.Provider>
  )
}

Indicators.propTypes = {
  children: arrayOf(element),
  activeIndex: number,
  onChangeActiveIndex: func,
}

/* -------------------------------------------------------------------------- */

Indicators.List = function IndicatorsList({ list, render, ...restProps }) {
  const { activeIndex } = useContext(Context)
  return (
    <List {...restProps}>
      {list.map((item, index) => render(item, index, activeIndex))}
    </List>
  )
}

Indicators.List.propTypes = {
  list: array,
  render: func,
}

/* -------------------------------------------------------------------------- */

Indicators.Item = function IndicatorsItem({ active, children, ...restProps }) {
  return (
    <Item {...restProps} active={active}>
      {children}
    </Item>
  )
}

Indicators.Item.propTypes = {
  children: element,
  active: bool,
}
