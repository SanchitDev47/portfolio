

import About from './About'
import Banner from './Banner';
import Qualification from './Qualification';
import Skills from './skills';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Testmonials from './testmonials';
// import KeenSlider from './KeenSlider';
import Footer from './Footer';

function IndexOfApp() {
    return (
        <>
            <Banner />
            <About />

            <Qualification />
            <Skills />
            <Service />
            <Portfolio />
            <Testmonials />
            <Contact />
            <Footer />
        </>
    )
}

export default IndexOfApp;
