import { array } from 'prop-types'
import { A11yHidden, Button, Indicators } from 'components'

/* -------------------------------------------------------------------------- */

export default function IndicatorsContainer({ list = [] }) {
  return (
    <Indicators>
      <A11yHidden as="h2">섹션 탐색</A11yHidden>
      <Indicators.List
        list={list}
        render={(item) => (
          <Indicators.Item key={item.id} item={item}>
            <Button>
              <A11yHidden>{item.headline.abbr}</A11yHidden>
            </Button>
          </Indicators.Item>
        )}
      />
    </Indicators>
  )
}

IndicatorsContainer.propTypes = {
  list: array,
}
