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
import { Box } from '@mui/material';


function IndexOfApp() {

  return (
    <>
      <Banner />
      <Box sx={{ m: '2%' }}>
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
      </Box>
      <Footer />
    </>
  )
}

export default IndexOfApp;
