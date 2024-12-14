import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import HeroSection from '@/components/hero-section/HeroSection'
import Navbar from '@/components/navbar/Navbar'
import Technologies from '@/components/technologies/technologies'
import React from 'react'
import VIntro from '@/components/videointro/intro'
import Intro from '@/components/videointro/intro'

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Technologies/>
<Intro/>
    {/* <VIntro/> */}
    <About/>
    <Footer/>
    </>
  )
}
