import React from 'react';
import HomeSecound from '../components/homeComponents/HomeSecound';
import HomeFirst from '../components/homeComponents/HomeFirst';
import HomeThird from '../components/homeComponents/HomeThird';
import HomeForth from '../components/homeComponents/HomeForth';
import Footer from '../components/sharedCompnents/Footer';
import { GlobalStore } from '../context/context';
function Home(props) {
  console.log(GlobalStore());
  return (
    <main>
      <HomeFirst />
      <HomeSecound />
      <HomeThird />
      <HomeForth />
      <Footer />
    </main>
  );
}

export default Home;
