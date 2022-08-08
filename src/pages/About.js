import React from 'react';
import RoutePath from '../components/sharedCompnents/RoutePath';
import AboutSecond from '../components/aboutCompnents/AboutSecond';
import Footer from '../components/homeComponents/HomeFooter';
function About(props) {
  return (
    <main>
      <RoutePath />
      <AboutSecond />
      <Footer />
    </main>
  );
}

export default About;
