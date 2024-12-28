import HeroSection from '@/components/hero-section/HeroSection'
import Technologies from '@/components/technologies/technologies'
import React from 'react'
import Intro from '@/components/videointro/intro'
import Newsletter from '@/components/Newsletter/Newsletter'
import MultipleItems from '@/components/testimonials/Testimonials'
import Services from '@/components/service/Services'

export default function Home() {
  return (
    <>
     
      <HeroSection />
      <Technologies />
      <Intro />
      <Services/>
      {/* <About /> */}
      <MultipleItems/>
      <Newsletter />
    </>
  )
}
