import { string } from 'prop-types'
import classNames from 'classnames'
import A11yHidden from '../common/A11yHidden'
import Header from './Header'
import Footer from './Footer'

/**
 * Layout 컴포넌트
 */
const Layout = ({ headline, className, children, ...props }) => (
  <>
    <Header />

    <main {...props} className={classNames('app-main', className)}>
      <A11yHidden as="h2">{headline}</A11yHidden>
      {children}
    </main>

    <Footer />
  </>
)

Layout.propTypes = {
  headline: string.isRequired,
}

export default Layout
