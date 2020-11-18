import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import SectionContainer from "pages/SectionContainer";

const Layout = () => (
  <>
    <Header />
    <Navigation />
    <main className="app-main">
      <SectionContainer />
    </main>
    <Footer />
  </>
);

export default Layout;
