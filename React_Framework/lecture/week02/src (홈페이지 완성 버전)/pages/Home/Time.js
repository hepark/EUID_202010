import classNames from 'classnames'

/* -------------------------------------------------------------------------- */

const Time = ({ children, className, ...props }) => {
  // 2020.04.25 → 2020-04-25
  const convertTimeFormat = children.replace(/\./g, '-')

  return (
    <time
      {...props}
      className={classNames('ediya-notice__article-date', className)}
      dateTime={`${convertTimeFormat}T16:31:04`}
    >
      {children}
    </time>
  )
}

export default Time
