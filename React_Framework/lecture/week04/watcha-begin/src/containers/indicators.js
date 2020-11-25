import { number, func, array } from 'prop-types'
import { A11yHidden, Button, Indicators } from 'components'

/* -------------------------------------------------------------------------- */

export default function IndicatorsContainer({
  list = [],
  activeIndex,
  onChangeActiveIndex,
}) {
  return (
    <Indicators>
      <A11yHidden as="h2">섹션 탐색</A11yHidden>
      <Indicators.List
        list={list}
        // [render props의 장점]
        // 종속되어 있는 하위 컴포넌트에 props를 일일이 전달하지 않고도
        // 외부 영역에서 props에 접근하여 처리가 가능
        render={(item, index) => (
          <Indicators.Item
            key={item.id}
            item={item}
            active={index === activeIndex}
          >
            <Button
              className="indicatorButton"
              onClick={() => onChangeActiveIndex(index)}
            >
              <A11yHidden className="tooltip">{item.headline.abbr}</A11yHidden>
            </Button>
          </Indicators.Item>
        )}
      />
    </Indicators>
  )
}

IndicatorsContainer.propTypes = {
  list: array,
  activeIndex: number,
  onChangeActiveIndex: func,
}
