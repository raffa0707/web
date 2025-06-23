import React from 'react'
import MyNav from './components/navbar';
import HeroBanner from './components/heroBanner';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import 'flowbite';


function App() {
  return (
  <>
    <MyNav />
    <HeroBanner />
    <AboutMe />
    <ContactMe />
  </>

  )
}

export default App;