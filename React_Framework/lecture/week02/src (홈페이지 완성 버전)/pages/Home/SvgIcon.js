import { string } from 'prop-types'

/**
 * SvgIcon 컴포넌트
 * @param {props} props 컴포넌트 props
 */
const SvgIcon = ({
  title,
  path,
  width = 16,
  height = 16,
  fill = 'none',
  stroke = '#f5f5f5',
} = {}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill={fill}
  >
    <title>{title}</title>
    <rect x="0.5" y="0.5" width={15} height={15} stroke={stroke} />
    <path d={path} stroke={stroke} />
  </svg>
)

SvgIcon.propTypes = {
  title: string.isRequired,
  path: string.isRequired,
}

export default SvgIcon
