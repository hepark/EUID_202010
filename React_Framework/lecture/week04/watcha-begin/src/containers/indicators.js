import { number, func, array } from 'prop-types'
import { A11yHidden, Button, Indicators } from 'components'

/* -------------------------------------------------------------------------- */

export default function IndicatorsContainer({
  list = [],
  activeIndex,
  onChangeActiveIndex,
}) {
  return (
    <Indicators
      activeIndex={activeIndex}
      onChangeActiveIndex={onChangeActiveIndex}
    >
      <A11yHidden as="h2">섹션 탐색</A11yHidden>
      <Indicators.List
        list={list}
        render={(item, index, activeIndex) => (
          <Indicators.Item
            key={item.id}
            item={item}
            active={index === activeIndex}
          >
            <Button className="indicatorButton">
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
