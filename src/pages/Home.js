import React from 'react';
import HomeSecound from '../components/homeComponents/HomeSecound';
import HomeFirst from '../components/homeComponents/HomeFirst';
import HomeThird from '../components/homeComponents/HomeThird';
import HomeForth from '../components/homeComponents/HomeForth';
import HomeFooter from '../components/homeComponents/HomeFooter';
function Home(props) {
  return (
    <main>
      <HomeFirst />
      <HomeSecound />
      <HomeThird />
      <HomeForth />
      <HomeFooter />
    </main>
  );
}

export default Home;
