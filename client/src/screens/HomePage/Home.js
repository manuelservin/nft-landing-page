import React from 'react'
import Hero from '../../components/Hero/Hero';
import Collection from '../../components/Collection/Collection';
import RoadMap from '../../components/RoadMap/RoadMap';
import JoinUs from '../../components/JoinUs/JoinUs';
import Clans from '../../components/Clans/Clans';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <Hero/>
    <Collection/>
    <RoadMap/>
    <JoinUs/>
     <Clans/> 
    <Footer/>

    </>
  )
}

export default Home