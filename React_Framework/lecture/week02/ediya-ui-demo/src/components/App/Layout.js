import React from 'react';
import { string } from 'prop-types';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const Layout = ({ headline, children, ...props }) => {
  // const { headline, children } = props;

  return (
    <>
      <AppHeader />
      <main {...props}>
        <h2>{headline}</h2>
        {children}
      </main>
      <AppFooter />
    </>
  );
};

Layout.propTypes = {
  headline: string.isRequired,
};

export default Layout;
