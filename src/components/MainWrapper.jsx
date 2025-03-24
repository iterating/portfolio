import React from 'react';
import LSidebar from './Global-content/LSidebar';
import Herosec from './Hero/Hero';
import About from './About/About';
import Resume from './Resume/Resume';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonials';
import Clientlogos from './Clientlogos/Clientlogos';
import Pricing from './Pricing/Pricing';
import Contact from './Contact/Contact';

export default function Main() {
  return (
    <main className="drake-main">
      <div id="smooth-wrapper">

        <div id="smooth-content">
          <LSidebar /> {/* this component will used by mobile devices */}
          <Herosec />
          <Portfolio />
          <About />
          <Resume />
          {/* <Services/> */}
          <Skills />
          {/* <Testimonials /> */}
          {/* <Clientlogos/> */}
          {/* <Pricing/> */}
          <Contact />
        </div>
      </div>
    </main>
  );
}
