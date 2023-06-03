import { useEffect, useState } from 'react';
import PageNavigation from '@/Common/Elements/PageNavigation';
import About from './About'
import Banner from './Banner';
import Qualification from './Qualification';
import Skills from './Skills';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Testmonials from './Testmonials';
import Footer from './Footer';

function IndexOfApp() {

  return (
    <>
      <Banner />
      <PageNavigation id={'about'}>
        <About />
      </PageNavigation>

      <PageNavigation id={'qualification'}>
        <Qualification />
      </PageNavigation>

      <PageNavigation id={'skills'}>
        <Skills />
      </PageNavigation>

      <PageNavigation id={'service'}>
        <Service />
      </PageNavigation>

      <PageNavigation id={'portfolio'}>
        <Portfolio />
      </PageNavigation>

      <PageNavigation id={'contact'}>
        <Contact />
      </PageNavigation>

      <Footer />
    </>
  )
}

export default IndexOfApp;
