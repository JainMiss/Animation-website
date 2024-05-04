
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Marquee from './components/Marquee'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Card from './components/Card'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App  ()  {



  const locomotiveScroll = new LocomotiveScroll();
  


  return (
    <div  className='w-full min-h-screen text-white bg-zinc-900'>
     <Navbar/>
     <LandingPage/>
     <Marquee/>
   <About/>
   <Eyes/>
   <Featured/>
   <Card/>
   <Footer/>
    </div>
  )
}

export default App


//2 19 minute