import { createContext, useContext, useState } from 'react'
import { any, number, string, array, func, shape } from 'prop-types'
import classNames from 'classnames'

import { A11yHidden } from 'components'
import { Container, Button } from './styles'

/* -------------------------------------------------------------------------- */

/**
 * 컴파운드 컴포넌트 간, 상태 공유를 위한 콘텍스트 생성
 */
const Context = createContext()

/**
 * 인디케이터 아이템 타입
 * - id: string
 * - abbr: string
 */
const indicatorsItemTypes = shape({ id: string, abbr: string })

/* -------------------------------------------------------------------------- */

const Indicators = ({ children, className, ...restProps }) => (
  <Container {...restProps} className={classNames(className)}>
    <A11yHidden as="h2">섹션 탐색</A11yHidden>
    {children}
  </Container>
)

Indicators.propTypes = {
  children: any,
  className: string,
}

/* -------------------------------------------------------------------------- */

Indicators.List = function IndicatorsList({
  className,
  list,
  render,
  ...resetProps
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    // 콘텍스트 value 값 공급
    <Context.Provider value={{ activeIndex, setActiveIndex }}>
      <ul {...resetProps} className={classNames('resetList', className)}>
        {list.map((item, index) => render(item, index))}
      </ul>
    </Context.Provider>
  )
}

Indicators.List.propTypes = {
  list: array.isRequired,
  render: func.isRequired,
  className: string,
}

/* -------------------------------------------------------------------------- */

Indicators.Item = function IndicatorsItem({
  item,
  index,
  active,
  className,
  ...resetProps
}) {
  // 콘텍스트 value 값 추출
  const { activeIndex, setActiveIndex } = useContext(Context)

  return (
    <li {...resetProps}>
      <Button
        type="button"
        className={classNames(
          'resetButton',
          className,
          active ? 'is-active' : null
        )}
        onClick={() => setActiveIndex(index)}
      >
        <A11yHidden className="tooltip">{item.abbr}</A11yHidden>
      </Button>
    </li>
  )
}

Indicators.Item.propTypes = {
  item: indicatorsItemTypes.isRequired,
  index: number.isRequired,
  className: string,
}

/* -------------------------------------------------------------------------- */

export default Indicators
