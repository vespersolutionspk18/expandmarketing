import React from 'react'
import Header from '@/app/components/Header'
import HeroSection from './components/HeroSection'
import InterestedSection from './components/InterestedSection'
import LogoCarousel from './components/LogoCarousel'
import BenefitsSection from './components/BenefitsSection'
import BrightestMindsSection from './components/BrightestMindsSection'
import JobsSection from './components/JobsSection'
import ExpandReady from '../components/ExpandReady'
import Footer from '../components/Footer'


export default function CareerPage() {
  return (
    <main className="bg-grey-100 min-h-screen">
      <Header />
      <HeroSection />
      <InterestedSection />
      <LogoCarousel />
      <BenefitsSection />
      <BrightestMindsSection />
      <JobsSection />
      <ExpandReady />
      <Footer />
    </main>
  )
}
