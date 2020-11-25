import { string, arrayOf, element } from 'prop-types'
import { Container, Headline, SubHeadline, IconButton } from './styles'
import arrowIconPath from 'assets/ArrowButton.svg'

/* -------------------------------------------------------------------------- */

export default function Section({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Section.propTypes = {
  // children: oneOf([arrayOf(element), () => null]),
  children: arrayOf(element),
}

/* -------------------------------------------------------------------------- */

Section.Headline = function SectionHeadline({ children, ...restProps }) {
  return <Headline {...restProps}>{children}</Headline>
}

Section.Headline.propTypes = {
  children: string,
}

/* -------------------------------------------------------------------------- */

Section.SubHeadline = function SectionSubHeadline({ children, ...restProps }) {
  return <SubHeadline {...restProps}>{children}</SubHeadline>
}

Section.SubHeadline.propTypes = {
  children: string,
}

/* -------------------------------------------------------------------------- */

Section.Button = function SectionButton({ ...restProps }) {
  return (
    <IconButton {...restProps}>
      <img src={arrowIconPath} alt={''} />
    </IconButton>
  )
}
