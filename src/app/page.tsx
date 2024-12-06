import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import HeroSection from '@/components/hero-section/HeroSection'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Footer/>
    </>
  )
}
