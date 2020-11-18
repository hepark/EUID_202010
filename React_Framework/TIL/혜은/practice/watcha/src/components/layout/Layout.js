import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Container from './Container'
import Footer from './Footer'
import Main from 'pages/Main'
import Sub from 'pages/Sub'

const Layout = () => (
  <>
    <Header />
    <Navigation />
    <Container>
      <Main />
      <Sub />
    </Container>
    <Footer />
  </>
)

export default Layout
