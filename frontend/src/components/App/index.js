import React from 'react'

import 'bootstrap/scss/bootstrap.scss'
import './base.sass';
import './index.sass'

import Header from '../sections/Header'
import About from '../sections/About'
import Services from '../sections/Services'
import Stack from '../sections/Stack'
import Mvp from '../sections/Mvp'
import Portfolio from '../sections/Portfolio'
import Contacts from '../sections/Contacts'
import Footer from '../sections/Footer'

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <Services />
        <Stack />
        <Mvp />
        <Portfolio />
        <Contacts />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Index;


