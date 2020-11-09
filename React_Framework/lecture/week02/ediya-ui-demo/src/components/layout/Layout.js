import React from 'react';
import { string } from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import A11yHidden from 'components/common/A11yHidden';

const Layout = ({ headline, children, ...props }) => {
  return (
    <>
      <Header />
      <main {...props}>
        <A11yHidden as="h2">{headline}</A11yHidden>
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  headline: string.isRequired,
};

export default Layout;
