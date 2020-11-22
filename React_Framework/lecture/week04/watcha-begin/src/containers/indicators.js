import { array } from 'prop-types'
import { A11yHidden, Indicators } from 'components'

/* -------------------------------------------------------------------------- */

// 인디케이터 컴포넌트(부품) 조립 → 컨테이너

export default function IndicatorsContainer({ list }) {
  return (
    <Indicators>
      <A11yHidden as="h2">섹션 탐색</A11yHidden>
      <Indicators.List list={list} />
    </Indicators>
  )
}

IndicatorsContainer.propTypes = {
  list: array,
}
