import { string, shape } from 'prop-types'
import classNames from 'classnames'

/* -------------------------------------------------------------------------- */

/**
 * RecommendList 컴포넌트
 * @param {props} props 컴포넌트 props
 */
const RecommendList = ({ children, className, ...props }) => {
  return (
    <ul
      {...props}
      className={classNames('ediya-recommend-list reset-list', className)}
    >
      {children}
    </ul>
  )
}

/* -------------------------------------------------------------------------- */

/**
 * RecommendList.Item 컴포넌트
 * @param {props} props
 */
RecommendList.Item = ({ image, children, className, ...props }) => (
  <li {...props} className={classNames('ediya-recommend-beverage', className)}>
    <img src={require(`../../${image}`).default} alt="" />
    {children}
  </li>
)

RecommendList.Item.propTypes = {
  image: string.isRequired,
}

RecommendList.Item.displayName = 'RecommendList.Item'

/* -------------------------------------------------------------------------- */

/**
 * RecommendList.ItemName 컴포넌트
 * @param {props} props
 */
RecommendList.ItemName = ({ contents, className, ...props }) => (
  <div {...props} className={classNames('beverage-name', className)}>
    <span className="beverage-name--ko-primary">{contents.ko.primary}</span>
    <span className="beverage-name--ko-secondary">{contents.ko.secondary}</span>
    <span className="beverage-name--en-accent">{contents.en}</span>
  </div>
)

RecommendList.ItemName.propTypes = {
  contents: shape({
    ko: shape({
      primary: string.isRequired,
      secondary: string.isRequired,
    }),
    en: string.isRequired,
  }),
}

RecommendList.ItemName.displayName = 'RecommendList.ItemName'

/* -------------------------------------------------------------------------- */

export default RecommendList
