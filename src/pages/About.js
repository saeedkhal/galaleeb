import React from 'react';
import RoutePath from '../components/sharedCompnents/RoutePath';
import AboutSecond from '../components/aboutCompnents/AboutSecond';
import Footer from '../components/sharedCompnents/Footer';
import { useEffect } from 'react';
function About(props) {
  useEffect(() => {
    console.log('in use effect');
  }, []);
  return (
    <main>
      <RoutePath />
      <AboutSecond />
      <Footer />
    </main>
  );
}

export default About;
