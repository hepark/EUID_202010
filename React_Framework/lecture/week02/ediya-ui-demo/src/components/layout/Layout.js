import React from 'react';
import { string } from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ headline, children, ...props }) => {
  return (
    <>
      <Header />
      <main {...props}>
        <h2>{headline}</h2>
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
