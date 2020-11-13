import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import A11yHidden from 'components/common/A11yHidden';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ headline, className, children, ...props }) => (
  // // const { headline, children } = props;
  // const a11yRef = useRef(null);

  // // useEffect
  // useEffect(() => {
  //   console.log(a11yRef);
  // });
  <>
    <Header />

    <main {...props} className={classNames('app-main', className)}>
      <A11yHidden as="h2">{headline}</A11yHidden>
      {children}
    </main>

    <Footer />
  </>
);

Layout.propTypes = {
  headline: string.isRequired,
};

export default Layout;
