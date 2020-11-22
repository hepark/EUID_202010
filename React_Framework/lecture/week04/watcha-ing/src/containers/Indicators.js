import { array } from 'prop-types'
import { Indicators } from 'components'

/* -------------------------------------------------------------------------- */

const IndicatorsContainer = ({ list, activeIndex, onChangeActiveIndex }) => (
  <Indicators>
    <Indicators.List
      list={list}
      render={(item, index) => (
        <Indicators.Item
          key={item.id}
          index={index}
          active={index === activeIndex}
          item={item}
          onClick={() => onChangeActiveIndex(index)}
        />
      )}
    />
  </Indicators>
)

IndicatorsContainer.propTypes = {
  list: array.isRequired,
}

/* -------------------------------------------------------------------------- */

export default IndicatorsContainer
