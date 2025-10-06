import React from 'react'
import Header from '@/app/components/Header'
import AboutHero from './components/AboutHero'
import WhoWeAre from './components/WhoWeAre'
import AboutStats from './components/AboutStats'
import WhatWeDo from './components/WhatWeDo'
import Footer from '../components/Footer'
import ExpandReady from '../components/ExpandReady'
import RecommendedByLeaders from '../components/services/RecommendedByLeaders'
import LeadChange from '../components/LeadChange'
import Blogs from '../home/Blogs'

export const metadata = {
  title: 'About | Expand Marketing',
  description: 'Award-winning search-first content marketing agency creating category leaders through innovative SEO and digital strategies across UK, USA, and EU'
}

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
       <div className="overflow-hidden">
         <AboutHero />
       </div>
        <WhoWeAre />
        <AboutStats />
        <WhatWeDo />
       <LeadChange />
        <RecommendedByLeaders />
        <Blogs />
        <ExpandReady />
        <Footer />
      </main>
    </>
  )
}

export default AboutPage
