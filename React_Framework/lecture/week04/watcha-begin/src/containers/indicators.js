import { array } from 'prop-types'
import { A11yHidden, Button } from 'components'

/* -------------------------------------------------------------------------- */

// 인디케이터 컴포넌트(부품) 조립 → 컨테이너

export default function IndicatorsContainer({ list = [] }) {
  console.log(list)
  return (
    <>
      <A11yHidden as="h2">섹션 탐색</A11yHidden>
      <Button>테스트</Button>
    </>
  )
}

IndicatorsContainer.propTypes = {
  list: array,
}
