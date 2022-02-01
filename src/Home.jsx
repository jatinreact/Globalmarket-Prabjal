import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Sidebar from './Component/Sidebar/Sidebar';
import Second_page_navbar from './Component/secondPageheader/Second_page_navbar'
import Featured from './Component/FEATURED PRODUCTS/Featured';
import FF from './Component/FEATURED PRODUCTS/FF';
import Requirement from './Component/Requirements/Requirements';
import StokeProdct from './Component/StokeProduct/StokeProduct'
import Aggriculture from './Component/aggriculture/Aggriculture'
import Card from './Component/Cards/Cards'
import ClientOpenion from './Component/ClientOpenion/ClientOpenion'
import Globel from './Component/Globel/Globel'
import Trade from './Component/trade/Trade'
import Blog from './Component/Blogs/Blogs'
import Subscribe from './Component/Subscribe/Subscribe'
import Company from './Component/CompaniesByCounrty/Company'
import AboutB2b from './Component/AboutB2B/AboutB2b';
import Footer from './Component/Footer/Footer';
import LowerFooter from './Component/lowerFooter/LowerFooter';

const Home = () => {
  return <div>

      <Sidebar/>
      <Second_page_navbar/>
      {/* <Featured/> */}
      {/* <Requirement/> */}
      
      <StokeProdct/>
      <Aggriculture/>
      <Card/>
      <ClientOpenion/>
      <Globel/>
      <Trade/>
      <Blog/>
      <Subscribe/>
      <Company/>

      <AboutB2b/>
      <Footer/>
      <LowerFooter/>
      
     
  </div>;
};

export default Home;
