import classNames from 'classnames'

const RecommendText = ({ children, className, ...props }) => (
  <p {...props} className={classNames('ediya-recommend-text', className)}>
    {children}
  </p>
)

export default RecommendText
