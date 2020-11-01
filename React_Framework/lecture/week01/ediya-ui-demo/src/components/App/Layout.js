import React from 'react';
import { string } from 'prop-types';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const Layout = ({ headline, children }) => {
  // const { headline, children } = props;

  return (
    <>
      <AppHeader />
      <main>
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
